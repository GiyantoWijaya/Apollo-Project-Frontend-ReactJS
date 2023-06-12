import { Panel } from "rsuite";
import "./panelNews.styles.css";

const PanelNews = () => {
  return (
    <Panel header="New Update" shaded>
      <p>
        In recent news, we are thrilled to announce the addition of an exciting
        new feature to our platform - the highly anticipated game of Rock,
        Paper, Scissors!
        <br /> Now, users can engage in thrilling battles with our intelligent
        computer opponent and compete for a spot on the leaderboard. With this
        captivating game, players can test their skills, strategize their moves,
        and experience the timeless joy of Rock, Paper, Scissors. <br /> Join us
        today and see if you have what it takes to climb to the top of the
        leaderboard and become the ultimate champion!
      </p>
    </Panel>
  );
};

export default PanelNews;
