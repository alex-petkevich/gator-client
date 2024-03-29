import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUserNotifications } from 'app/shared/model/user-notifications.model';

type EntityResponseType = HttpResponse<IUserNotifications>;
type EntityArrayResponseType = HttpResponse<IUserNotifications[]>;

@Injectable({ providedIn: 'root' })
export class UserNotificationsService {
  public resourceUrl = SERVER_API_URL + 'api/user-notifications';

  constructor(protected http: HttpClient) {}

  create(userNotifications: IUserNotifications): Observable<EntityResponseType> {
    return this.http.post<IUserNotifications>(this.resourceUrl, userNotifications, { observe: 'response' });
  }

  update(userNotifications: IUserNotifications): Observable<EntityResponseType> {
    return this.http.put<IUserNotifications>(this.resourceUrl, userNotifications, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUserNotifications>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUserNotifications[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
