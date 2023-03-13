import TabContainer from "./TabContainer";

export default function FrequentlyViewed() {
  return (
    <article className="frequently-viewed">
      <h2 className="section-header">Frequently Viewed</h2>
      <h3>San Francisco International Airport</h3>
      <img src="/imgs/sfo.png" alt="San Francisco International Airport" />
      <TabContainer />
    </article>
  )
}