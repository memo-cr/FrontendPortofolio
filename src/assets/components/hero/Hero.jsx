import Stars from "./Stars";

export default function Hero() {
  return (
    <section className="hero">
      <Stars />
      <div className="hero-container container grid">
        Hi. I'm Mehmet. A <span className="gradient">Software Dev</span>.
      </div>
      <Stars />
    </section>
  );
}
