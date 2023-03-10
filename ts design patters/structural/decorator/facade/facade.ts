interface User {
  id: number;
  photos?: Photo[];
}
interface Photo {
  id: number;
  img: string;
}
class JsonFetcherService {
  getPhotos(): Photo[] {
    return [{ id: 1, img: "" }];
  }

  getUsers(): Array<User> {
    return [{ id: 1 }, { id: 2 }];
  }
}

export class jsonFacade {
  constructor(private _service: JsonFetcherService) {}

  getUser(id: number) {
    const users: User[] = this._service.getUsers();
    const user: User = users.filter((user) => user.id == id)[0];
    user.photos = this._service.getPhotos().filter((photo) => photo.id == id);
  }
}
