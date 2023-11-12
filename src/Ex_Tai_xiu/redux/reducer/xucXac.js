import { CHOI_GAME, LUA_CHON, TAI, XIU } from "../constant/xucXac";

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
  ketQua: null,
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
        let tongDiem = 0;
        let newXucXacArr = [];
        state.xucXacArr.forEach((item) => {
          let random = Math.floor(Math.random() * 6 + 1);
          tongDiem += random;
          newXucXacArr.push({
            img: `./imgXucXac/${random}.png`,
            giaTri: random,
          });
        });
        // xu ly thang thua
        if (
          (state.luaChon == TAI && tongDiem >= 11) ||
          (state.luaChon == XIU && tongDiem < 11)
        ) {
          // user win
          state.ketQua = <p className="text-success">"WIN"</p>;
          state.soLuotThang++;
        } else {
          // user lose
          state.ketQua = <p className="text-danger">"LOSE"</p>;
        }
        // tao mang xuc xac moi
        state.xucXacArr = newXucXacArr;
        // tang so luot choi
        state.soLuotChoi++;
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
