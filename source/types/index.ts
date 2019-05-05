/*!
 * Copyright (C) 2018-2020 Juridoc
 */
import { Seat } from './seat';

export { Role } from './role';
export { Seat };

/**
 * Any seat type.
 */
export type AnySeat = Seat.Internal | Seat.External;
