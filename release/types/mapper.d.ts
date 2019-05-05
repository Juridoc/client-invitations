/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import { Entity } from './entity';
/**
 * Invitations mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Load the invitation that corresponds to the specified invitation Id.
     * @param id Invitation Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the invitation entity.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all invitations that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the invitation list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all invitations that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of invitations or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the invitation that corresponds to the specified invitation Id.
     * @param id Message Id.
     * @returns Returns a promise to get true when the invitation was deleted, false otherwise.
     */
    remove(id: string): Promise<boolean>;
}
