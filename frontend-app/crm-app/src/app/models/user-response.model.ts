import { HttpResponse } from '@angular/common/http';
import { User } from './user.model';

export class UserResponse extends HttpResponse<User> {}
