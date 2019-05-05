/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import { Entity } from './entity';

/**
 * Invitations mapper class.
 */
@Injection.Describe({ singleton: true, name: 'invitations' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Load the invitation that corresponds to the specified invitation Id.
   * @param id Invitation Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the invitation entity.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * List all invitations that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the invitation list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all invitations that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of invitations or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the invitation that corresponds to the specified invitation Id.
   * @param id Message Id.
   * @returns Returns a promise to get true when the invitation was deleted, false otherwise.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
