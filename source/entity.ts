/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Validators from '@singleware/types';

import * as ApiCheckouts from '@juridoc/client-checkouts';

import * as Types from './types';

/**
 * Invitation entity class.
 */
@RestDB.Schema.Entity('invitations')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Invitation Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * Checkout entity.
   */
  @RestDB.Schema.Object(() => ApiCheckouts.Entity, ['id', 'status', 'lastError'])
  @Class.Public()
  public checkout?: ApiCheckouts.Entity;

  /**
   * Target Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public targetId?: string;

  /**
   * Invitation seat type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration([...Object.values(Types.Seat.Internal), ...Object.values(Types.Seat.External)])
  @Class.Public()
  public type!: Types.AnySeat;

  /**
   * Role type.
   */
  @RestDB.Schema.Enumeration(Object.values(Types.Role))
  @Class.Public()
  public role?: Types.Role;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * First name.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public firstName!: string;

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
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public email!: string;

  /**
   * Language code.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public language!: string;

  /**
   * Get the full name.
   */
  @Class.Public()
  public get fullName(): string | undefined {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    } else if (this.firstName) {
      return `${this.firstName}`;
    } else if (this.lastName) {
      return `${this.lastName}`;
    }
    return void 0;
  }
}
