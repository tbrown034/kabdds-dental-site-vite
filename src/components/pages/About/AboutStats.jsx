import React from "react";
import { Icon, Statistic } from "semantic-ui-react";

const Statistics = () => (
  <>
    <div className="quote-card center-text">
      <h2>'Not Every Dentist Does This'</h2>
      <Statistic.Group>
        <Statistic>
          <Statistic.Value className="center-text statisticValue">
            {" "}
            6%
          </Statistic.Value>
          <Statistic.Label>Of U.S. Dentists become a Fellow</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>500 Hours</Statistic.Value>
          <Statistic.Label>Required of continuing education</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>350 Hours</Statistic.Value>
          <Statistic.Label>Required of Live Courses</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="book" />
          </Statistic.Value>
          <Statistic.Label>Must pass a board-certified exam</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </div>
  </>
);

export default Statistics;
