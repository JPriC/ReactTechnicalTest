/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { shallow, mount } from "enzyme";
import MeetupItem from "./MeetupItem";
import FavoritesContext from "../../providers/favoritesContext";

const mockMeetup = {
  id: "m1",
  title: "This is a first meetup",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
  address: "Meetupstreet 5, 12345 Meetup City",
  description:
    "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
};

describe("<MeetupItem/>", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<MeetupItem item={mockMeetup} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("displays meetup details correctly", () => {
    const wrapper = shallow(<MeetupItem item={mockMeetup} />);
    expect(wrapper.find("h3").text()).toBe(mockMeetup.title);
    expect(wrapper.find("address").text()).toBe(mockMeetup.address);
    expect(wrapper.find("p").text()).toBe(mockMeetup.description);
    expect(wrapper.find("img").prop("src")).toBe(mockMeetup.image);
    expect(wrapper.find("img").prop("alt")).toBe(mockMeetup.title);
  });

  test("renders 'Add to Favorites' button when meetup is not favorite", () => {
    const contextValue = {
      favorites: [],
      totalFavorites: 0,
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(false),
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={contextValue}>
        <MeetupItem item={mockMeetup} />
      </FavoritesContext.Provider>
    );

    expect(wrapper.find("button").text()).toBe("Add to Favorites");
  });

  test("renders 'Remove from Favorites' button when meetup is favorite", () => {
    const contextValue = {
      favorites: [mockMeetup],
      totalFavorites: 1,
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(true),
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={contextValue}>
        <MeetupItem item={mockMeetup} />
      </FavoritesContext.Provider>
    );

    expect(wrapper.find("button").text()).toBe("Remove from Favorites");
  });

  test("calls addFavorite when 'Add to Favorites' button is clicked", () => {
    const addFavoriteMock = jest.fn();
    const contextValue = {
      favorites: [],
      totalFavorites: 0,
      addFavorite: addFavoriteMock,
      removeFavorite: jest.fn(),
      isFavorite: jest.fn().mockReturnValue(false),
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={contextValue}>
        <MeetupItem item={mockMeetup} />
      </FavoritesContext.Provider>
    );

    wrapper.find("button").simulate("click");
    expect(addFavoriteMock).toHaveBeenCalledWith(mockMeetup);
  });

  test("calls removeFavorite when 'Remove from Favorites' button is clicked", () => {
    const removeFavoriteMock = jest.fn();
    const contextValue = {
      favorites: [mockMeetup],
      totalFavorites: 1,
      addFavorite: jest.fn(),
      removeFavorite: removeFavoriteMock,
      isFavorite: jest.fn().mockReturnValue(true),
    };

    const wrapper = mount(
      <FavoritesContext.Provider value={contextValue}>
        <MeetupItem item={mockMeetup} />
      </FavoritesContext.Provider>
    );

    wrapper.find("button").simulate("click");
    expect(removeFavoriteMock).toHaveBeenCalledWith(mockMeetup.id);
  });
});
