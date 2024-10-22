/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { mount } from "enzyme";
import Favorites from "./Favorites";
import FavoritesContext from "../providers/favoritesContext";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "../components/meetups/MeetupList.module.css";

const mockFavorites = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Tech Innovations Summit",
    image:
      "https://cdn.pixabay.com/photo/2015/09/18/19/41/startup-948485_960_720.jpg",
    address: "Tech Park Avenue 10, 67890 Innovation City",
    description:
      "A summit focused on the latest innovations in technology. Network with industry leaders and explore cutting-edge advancements.",
  },
];

describe("<Favorites/>", () => {
  test("renders the list of favorite meetups", () => {
    const contextValue = {
      favorites: mockFavorites,
      totalFavorites: mockFavorites.length,
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      isFavorite: jest.fn(),
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={contextValue}>
        <Favorites />
      </FavoritesContext.Provider>
    );

    expect(wrapper.find(`ul.${classes.list}`).children()).toHaveLength(
      mockFavorites.length
    );
    mockFavorites.forEach((meetup) => {
      expect(wrapper.find(MeetupItem).find({ item: meetup }).exists()).toBe(
        true
      );
    });
  });
});
