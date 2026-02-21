'use client';
import React, { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    // Log client-side so it's visible in browser console during development
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: '#f8fafc',
        color: '#0f172a',
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}
    >
      <div
        style={{
          maxWidth: 720,
          width: '100%',
          background: 'white',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 8px 24px rgba(2,6,23,0.08)',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 22 }}>Something went wrong</h1>
        <p style={{ color: '#475569', marginTop: 8 }}>
          An unexpected error occurred. You can try again or contact support if the problem persists.
        </p>

        <details style={{ marginTop: 12, color: '#0f172a' }}>
          <summary style={{ cursor: 'pointer', color: '#0f172a' }}>Error details</summary>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              background: '#f1f5f9',
              padding: 12,
              borderRadius: 8,
              marginTop: 8,
              color: '#0f172a',
            }}
          >
            {error?.message ?? String(error)}
          </pre>
        </details>

        <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '8px 14px',
              borderRadius: 8,
              border: 'none',
              background: '#0ea5e9',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Try again
          </button>

          <a
            href="mailto:support@example.com"
            style={{
              padding: '8px 14px',
              borderRadius: 8,
              textDecoration: 'none',
              background: '#e2e8f0',
              color: '#0f172a',
            }}
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}