interface AdminTypes {
  super: string[];
  admins: string[];
}

export class AdminManager {
  private static _admins: AdminTypes = { admins: [], super: [] };

  public static initAdminsUsers = (admins: any) => {
    this._admins = admins;
  };

  public static get admins() {
    return this._admins.admins ?? [];
  }

  public static get superAdmins() {
    return this._admins.super ?? [];
  }

  public static get allAdmins() {
    return this._admins.admins.concat(this._admins.super);
  }
}
