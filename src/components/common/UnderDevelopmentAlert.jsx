import { useEffect } from "react";
import Swal from "sweetalert2";

const UnderDevelopmentAlert = ({ section }) => {
  useEffect(() => {
    Swal.fire({
      title: "🚧 This Section is Still in Progress",
      html: `
        <div style="text-align:left; line-height:1.6; color:#374151;">
          <p>I'm currently working on improving the <b>${section || "site"}</b> section.</p>
          <p>The data you see here is <b>temporary and for display only</b>.</p>
          <p>Saving or editing features are not active yet, since development is ongoing.</p>
          <hr style="margin:12px 0; border-color:#eee;">
          <p style="font-size:13px; color:#6b7280;">
            Thank you for checking this out — updates will be live soon once the section is fully functional.
          </p>
        </div>
      `,
      icon: "info",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#7a2f7b",
      background: "#ffffff",
      customClass: {
        popup: "rounded-2xl shadow-lg border border-gray-200",
        confirmButton: "px-4 py-2 text-sm font-semibold rounded-lg",
      },
    });
  }, [section]);

  return null;
};

export default UnderDevelopmentAlert;
