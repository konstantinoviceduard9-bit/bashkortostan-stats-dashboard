"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { LoadingState } from "@/components/ui/LoadingState";
import { useI18n } from "@/lib/i18n/LocaleProvider";

interface UserProfile {
  login: string;
  role: string;
  municipality_name: string | null;
  max_user_id: string | null;
}

export default function ProfilePage() {
  const { t } = useI18n();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [maxUserId, setMaxUserId] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<UserProfile>("/profile").then((data) => {
      setProfile(data);
      setMaxUserId(data.max_user_id ?? "");
    });
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const updated = await apiFetch<UserProfile>("/profile", {
      method: "PATCH",
      body: JSON.stringify({ max_user_id: maxUserId }),
    });
    setProfile(updated);
    setMessage(t.profile.saved);
  }

  if (!profile) return <LoadingState label={t.profile.loading} />;

  const roleLabel = t.roles[profile.role as keyof typeof t.roles] ?? profile.role;

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <PageHeader
        title={t.profile.title}
        subtitle={`${profile.login} · ${profile.municipality_name ?? t.common.noData} · ${roleLabel}`}
      />
      <div className="card-bashkir">
        <form className="space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            {t.profile.maxId}
            <input className="input-bashkir" value={maxUserId} onChange={(event) => setMaxUserId(event.target.value)} />
          </label>
          {message ? <p className="text-sm text-bashkir-green">{message}</p> : null}
          <Button type="submit">{t.common.save}</Button>
        </form>
      </div>
    </div>
  );
}
