export default function MapPage() {
  return (
    <div>
      <iframe
        className="w-[100%] h-screen"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38007.753094675754!2d-2.3515436080914704!3d53.45979950804628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bade198f6a2ab%3A0xa06b7a1e162e18f9!2sOld%20Trafford%2C%20Stretford%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2sid!4v1694784327856!5m2!1sen!2sid"
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  );
}
