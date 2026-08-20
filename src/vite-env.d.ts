/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SKIP_PERMISSION_ONBOARDING?: "1";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
