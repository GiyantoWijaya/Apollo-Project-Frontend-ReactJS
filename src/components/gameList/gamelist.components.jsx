import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../gameList/gamelist.styles.css";

const GameList = () => {
  const [dataGame, setDataGame] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await axios.get("http://localhost:5001/api/game-list");
        const fetchData = fetch.data.data.game_list;

        setDataGame(fetchData);
      } catch (error) {}
    };
    getData();
  }, []);

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-dark">GAME LIST</h1>
        <br />
        {/* <Row> */}
        <div className="container-game">
          {dataGame !== null && (
            <>
              {dataGame.map((res, index) => {
                return (
                  <Link key={index} to={`/game/${res.id}`}>
                    <div>
                      {/* <Col md={4} className="gamelistWrapper" key={index}> */}
                      <Card className="gameImage">
                        <Image
                          src={res.thumbnail_url}
                          alt="Tetris"
                          className="images"
                        />
                        <div className="bg-dark">
                          <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">
                              {res.name}
                            </Card.Title>
                            <Card.Text className="text-left">
                              {res.description}
                            </Card.Text>
                          </div>
                        </div>
                      </Card>
                      {/* </Col> */}
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
        {/* </Row> */}
      </Container>
    </div>
  );
};

export default GameList;
