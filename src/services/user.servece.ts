import { instance } from "../api";
import { IUser } from "../types/user.interface";

export interface ITransferMoney {
  amount: number
  card: number
  fromCard: number
}

export const UserService = {
  async getProfile() {
    const response = await instance.get<IUser[]>(`/users/1`);
    return response.data;
  },

  async  getUsers(){
    const response = await instance.get<IUser[]>(`/users`);
    return response.data.filter((user) => user.id !== 1);
  },

  async getUserByCard(card: number) {
    const response = await instance.get<IUser[]>(`/users`, {
      params: {
        card,
      },
    });
    return response.data[0];
  },

  async transferMoney({ amount, card, fromCard}: ITransferMoney) {
    const userFrom = await this.getUserByCard(fromCard);
    const userTo = await this.getUserByCard(card);

    await instance.patch(`/users/${userFrom.id}`, {
      balance: userFrom.balance - amount,
    });

    await instance.patch(`/users/${userTo.id}`, {
      balance: userTo.balance + amount,
    });
  },
};
