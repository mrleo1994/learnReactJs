import { CHOI_GAME, LUA_CHON } from "../constant/xucXac";

let initialState = {
  xucXacArr: [
    {
      img: "./imgXucXac/1.png",
      giaTri: 1,
    },
    {
      img: "./imgXucXac/1.png",
      giaTri: 1,
    },
    {
      img: "./imgXucXac/1.png",
      giaTri: 1,
    },
  ],
  luaChon: null,
  soLuotChoi: 0,
  soLuotThang: 0,
};
export const xucXacReducer = (state = initialState, action) => {
  {
    switch (action.type) {
      case LUA_CHON: {
        // state.luaChon=action.payload
        return { ...state, luaChon: action.payload };
      }
      case CHOI_GAME: {
        // random 1 den 6
        let newXucXacArr = [];
        state.xucXacArr.forEach((item) => {
          let random = Math.floor(Math.random() * 6 + 1);
          newXucXacArr.push({
            img: `./imgXucXac/${random}.png`,
            giaTri: random,
          });
        });
        state.xucXacArr = newXucXacArr;
        return { ...state };
      }
      default:
        return state;
    }
  }
};

/**
 * 1. viet reducer case lua chon
 * 2. vao KetQua show lua chon => mapStateToProp
 */
