import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  private headers: Headers;
  private options: RequestOptions;

  private users = [];

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public getUsers(){
    return this.http
      .get('/api/users', this.options)
      .map( res => res.json() );
  }

  /**
   * Adds a new users
   */
  public addUser(user) {
    return this.http
      .post('/api/users', JSON.stringify(user), this.options)
      .map( res => res.json() );
  }

  /**
   * Delete user
   */
  public deleteUser(id) {
    return this.http
      .delete('/api/users/' + id, this.options)
      .map( res => res.json() );
  }

  /**
   * Delete user
   */
  public findUser(id) {
    return this.http
      .get('/api/user/' + id, this.options)
      .map( res => res.json() );
  }

  /**
   * Update user
   */
  public updateUser(user) {
    return this.http
      .put('/api/users', JSON.stringify(user), this.options)
      .map( res => res.json() );
  }
}
