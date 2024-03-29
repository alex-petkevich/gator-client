import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IUserProperties } from 'app/shared/model/user-properties.model';

type EntityResponseType = HttpResponse<IUserProperties>;
type EntityArrayResponseType = HttpResponse<IUserProperties[]>;

@Injectable({ providedIn: 'root' })
export class UserPropertiesService {
  public resourceUrl = SERVER_API_URL + 'api/user-properties';

  constructor(protected http: HttpClient) {}

  create(userProperties: IUserProperties): Observable<EntityResponseType> {
    return this.http.post<IUserProperties>(this.resourceUrl, userProperties, { observe: 'response' });
  }

  update(userProperties: IUserProperties): Observable<EntityResponseType> {
    return this.http.put<IUserProperties>(`${this.resourceUrl}/${userProperties.id}`, userProperties, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IUserProperties>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IUserProperties[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
