enum TypesOfNotifications {
  Error = "ERROR",
  Succes = "SUCCESS",
  Info = "INFO",
  Warning = "WARNING",
}

interface INotification {
  id: number;
  type: TypesOfNotifications;
  message: string;
  time: string;
  seen: boolean;
}

interface INotifications {
  notifications: INotification[];
  howMany: number;
}

export type {
  TypesOfNotifications,
  INotification,
  INotifications
};
