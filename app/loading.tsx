import React from 'react';

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        padding: 24,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#e6eef6"
            strokeWidth="5"
          />
          <path
            fill="#0ea5e9"
            d="M25 5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"
            transform="rotate(0 25 25)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <div style={{ marginTop: 12, color: '#0f172a' }} aria-live="polite">
          Loading…
        </div>
      </div>
    </div>
  );
}