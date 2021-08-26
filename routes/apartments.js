var express = require("express");
var router = express.Router();

const apartments = [
  {
    id: 1,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4,
    price: 10000,
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Uzhgorod",
    },
    owner: {
      name: "Mary",
      phone: "000-000-000",
    },
  },
  {
    id: 2,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4,
    price: 9000,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Odessa",
    },
    owner: {
      name: "Larry",
      phone: "000-000-000",
    },
  },
  {
    id: 3,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4.5,
    price: 12000,
    img: "https://images.unsplash.com/photo-1486304873000-235643847519?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Odessa",
    },
    owner: {
      name: "Lay",
      phone: "000-000-000",
    },
  },
  {
    id: 4,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4.5,
    price: 9000,
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Kyiv",
    },
    owner: {
      name: "Garry",
      phone: "000-000-000",
    },
  },
  {
    id: 5,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4.5,
    price: 10500,
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Kyiv",
    },
    owner: {
      name: "George",
      phone: "000-000-000",
    },
  },
  {
    id: 6,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4.5,
    price: 15000,
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Kyiv",
    },
    owner: {
      name: "Henry",
      phone: "000-000-000",
    },
  },
  {
    id: 7,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4.5,
    price: 13000,
    img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Lviv",
    },
    owner: {
      name: "John",
      phone: "000-000-000",
    },
  },
  {
    id: 8,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4,
    price: 8500,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Lviv",
    },
    owner: {
      name: "Karry",
      phone: "000-000-000",
    },
  },
  {
    id: 9,
    title: "Best apartment ever",
    descr:
      "Laboris ad officia dolore aliqua officia do laborum elit deserunt. Ut eiusmod adipisicing irure ex est proident excepteur. Tempor cillum fugiat nostrud ipsum commodo Lorem ad. Lorem minim dolore ullamco occaecat anim esse.",
    rating: 4,
    price: 11000,
    img: "https://images.unsplash.com/photo-1539922631499-09155cc609a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    location: {
      city: "Cherkasy",
    },
    owner: {
      name: "Ray",
      phone: "000-000-000",
    },
  },
];

router.get("/", function (req, res, next) {
  res.json(apartments);
});

router.get("/:id", function (req, res, next) {
  res.json(apartments[req.params.id - 1]);
});

module.exports = router;
