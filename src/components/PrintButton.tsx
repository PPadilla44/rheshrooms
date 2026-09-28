"use client";

export default function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn-glossy btn-moss">
      Print or save as PDF
    </button>
  );
}
