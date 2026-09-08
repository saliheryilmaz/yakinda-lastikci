'use client';

import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import { Send } from 'lucide-react';
import { serviceAreas } from '@/data/service-areas';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const vehicleTypes = ['Otomobil', 'SUV', 'Hafif ticari'];
const issueTypes = ['Lastik patladı', 'Lastik indi', 'Lastik değişimi', 'Jant / lastik sorunu', 'Diğer'];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [started, setStarted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function markStarted() {
    if (!started) {
      trackEvent('lead_form_start');
      setStarted(true);
    }
  }

  function readFormString(formData: FormData, key: string) {
    const value = formData.get(key);
    return typeof value === 'string' ? value : '';
  }

  function handleSubmit(event: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const trap = readFormString(formData, 'website');
    const name = readFormString(formData, 'name').trim();
    const phone = readFormString(formData, 'phone').replace(/\s/g, '');
    const district = readFormString(formData, 'district');
    const issue = readFormString(formData, 'issue');

    if (trap) return;

    if (!name || !district || !issue || !/^(\+90|0)?5\d{9}$/.test(phone)) {
      setStatus('error');
      setError('Lütfen ad, geçerli cep telefonu, ilçe ve sorun tipini doldurun.');
      return;
    }

    trackEvent('lead_form_submit', {
      event_label: district,
      issue_type: issue,
    });
    setStatus('success');
    setError('');
    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm ${compact ? 'space-y-3' : 'space-y-4'}`}
      noValidate
    >
      <div>
        <h2 className="text-xl font-semibold text-slate-950">Yardım talebi oluşturun</h2>
        <p className="mt-1 text-sm text-slate-600">
          Backend entegrasyonu için API katmanı hazır bırakıldı; acil dönüşümde telefon ve WhatsApp önceliklidir.
        </p>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-3 sm:grid-cols-2">
        <label htmlFor="lead-name" className="grid gap-1 text-sm font-medium text-slate-800">
          Ad
          <Input id="lead-name" name="name" placeholder="Adınız" autoComplete="name" className="min-h-11" onFocus={markStarted} />
        </label>
        <label htmlFor="lead-phone" className="grid gap-1 text-sm font-medium text-slate-800">
          Telefon
          <Input id="lead-phone" name="phone" type="tel" inputMode="tel" placeholder="05xx xxx xx xx" autoComplete="tel" className="min-h-11" onFocus={markStarted} />
        </label>
        <label htmlFor="lead-district" className="grid gap-1 text-sm font-medium text-slate-800">
          Bulunduğunuz ilçe
          <select id="lead-district" name="district" defaultValue="" onFocus={markStarted} className="min-h-11 rounded-lg border border-input bg-white px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
            <option value="" disabled>
              İlçe seçin
            </option>
            {serviceAreas.map((area) => (
              <option key={area.slug} value={area.district}>
                {area.district}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="lead-vehicle" className="grid gap-1 text-sm font-medium text-slate-800">
          Araç tipi
          <select id="lead-vehicle" name="vehicle" defaultValue="Otomobil" onFocus={markStarted} className="min-h-11 rounded-lg border border-input bg-white px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
            {vehicleTypes.map((vehicle) => (
              <option key={vehicle}>{vehicle}</option>
            ))}
          </select>
        </label>
      </div>
      <label htmlFor="lead-issue" className="grid gap-1 text-sm font-medium text-slate-800">
        Sorun tipi
        <select id="lead-issue" name="issue" defaultValue="" onFocus={markStarted} className="min-h-11 rounded-lg border border-input bg-white px-3 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
          <option value="" disabled>
            Sorun seçin
          </option>
          {issueTypes.map((issue) => (
            <option key={issue}>{issue}</option>
          ))}
        </select>
      </label>
      <label htmlFor="lead-note" className="grid gap-1 text-sm font-medium text-slate-800">
        Opsiyonel not
        <Textarea id="lead-note" name="note" placeholder="Stepne yok, lastik yanaktan yarıldı, otoparktayım..." className="min-h-24" onFocus={markStarted} />
      </label>
      {status === 'error' ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      {status === 'success' ? (
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
          Talep doğrulandı. API entegrasyonu eklendiğinde bu veri gerçek endpoint&apos;e gönderilecek.
        </p>
      ) : null}
      <Button type="submit" size="lg" className="min-h-12 w-full bg-[var(--cta)] text-base hover:bg-[var(--cta-hover)]">
        <Send className="size-5" aria-hidden="true" />
        Talebi Gönder
      </Button>
    </form>
  );
}
