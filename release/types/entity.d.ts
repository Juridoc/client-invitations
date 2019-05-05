/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as ApiCheckouts from '@juridoc/client-checkouts';
import * as Types from './types';
/**
 * Invitation entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Invitation Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * Checkout entity.
     */
    checkout?: ApiCheckouts.Entity;
    /**
     * Target Id.
     */
    targetId?: string;
    /**
     * Invitation seat type.
     */
    type: Types.AnySeat;
    /**
     * Role type.
     */
    role?: Types.Role;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * First name.
     */
    firstName: string;
    /**
     * Last name.
     */
    lastName?: string;
    /**
     * Invitation email.
     */
    email: string;
    /**
     * Language code.
     */
    language: string;
    /**
     * Get the full name.
     */
    get fullName(): string | undefined;
}
