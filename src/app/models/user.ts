import { Profile } from './profile';
export abstract class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  status: boolean;
  genre: string;
  archive: boolean;
  avatar: Blob;
  token?: string;


  protected constructor(id: number, email: string, password: string, firstName: string, lastName: string, status: boolean,
                        genre: string, archive: boolean, avatar: Blob, profile: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.status = status;
    this.genre = genre;
    this.archive = archive;
    this.avatar = avatar;
  }
}
