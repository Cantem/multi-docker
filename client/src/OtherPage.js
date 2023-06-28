import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div className="App-about">
      <p>
        A Fibonacci calculator is a tool or program that calculates and displays
        the Fibonacci sequence up to a specified index or term. The Fibonacci
        sequence is a series of numbers in which each number is the sum of the
        two preceding ones, starting with 0 and 1.
      </p>
      <p>
        In the case of a Fibonacci calculator limited to 40 indexes, it means
        that the calculator can calculate and display the Fibonacci sequence up
        to the 40th term. The calculator takes the user-defined index as input
        and then generates and shows the corresponding Fibonacci numbers.
      </p>
      <p>
        For example, if you enter an index of 10, the calculator will display
        the first 10 Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
      </p>
      <p>
        The purpose of a Fibonacci calculator is to provide a quick and
        convenient way to obtain Fibonacci numbers without manually calculating
        each term. It can be useful in various fields such as mathematics,
        computer science, and finance, where Fibonacci numbers have applications
        in pattern recognition, algorithms, and financial analysis, among other
        areas.
      </p>
      <Link to="/">Go back home</Link>
    </div>
  );
};

export default OtherPage;
