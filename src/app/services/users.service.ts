import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@intefaces';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users = computed(() => this.#state().users)
  #http = inject(HttpClient)
  #state = signal<State>({
    users: [],
    loading: true
  })

  constructor() {
    this.#state.update(oldState => { return { ...oldState, loading: true } })
    this.#http.get<UsersResponse>("https://reqres.in/api/users")
      .pipe(
        delay(1500)
      ).subscribe(res => {
        this.#state.update(oldState => {
          return { users: res.data, loading: false }
        })
      })

  }

  getUsersById(id: string) {
    return this.#http.get<UserResponse>(`https://reqres.in/api/users/${id}`).pipe(
      delay(1500),
      map(r => r.data)
    );


  }





}
