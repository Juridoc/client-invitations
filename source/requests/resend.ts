/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

/**
 * Invitation resend request.
 */
@RestDB.Schema.Entity('invitations/resend')
@Class.Describe()
export class Resend extends Class.Null {
  /**
   * First name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public firstName?: string;

  /**
   * Last name.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public lastName?: string;

  /**
   * Invitation email.
   */
  @Validators.Validate(new Validators.Common.Email())
  @RestDB.Schema.String()
  @Class.Public()
  public email?: string;

  /**
   * Language code.
   */
  @RestDB.Schema.String()
  @Class.Public()
  public language?: string;
}
