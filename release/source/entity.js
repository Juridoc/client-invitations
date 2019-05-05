"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Validators = require("@singleware/types");
const ApiCheckouts = require("@juridoc/client-checkouts");
const Types = require("./types");
/**
 * Invitation entity class.
 */
let Entity = class Entity extends Class.Null {
    /**
     * Get the full name.
     */
    get fullName() {
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`;
        }
        else if (this.firstName) {
            return `${this.firstName}`;
        }
        else if (this.lastName) {
            return `${this.lastName}`;
        }
        return void 0;
    }
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "profileId", void 0);
__decorate([
    RestDB.Schema.Object(() => ApiCheckouts.Entity, ['id', 'status', 'lastError']),
    Class.Public()
], Entity.prototype, "checkout", void 0);
__decorate([
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "targetId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration([...Object.values(Types.Seat.Internal), ...Object.values(Types.Seat.External)]),
    Class.Public()
], Entity.prototype, "type", void 0);
__decorate([
    RestDB.Schema.Enumeration(Object.values(Types.Role)),
    Class.Public()
], Entity.prototype, "role", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "expireAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "firstName", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "lastName", void 0);
__decorate([
    Validators.Validate(new Validators.Common.Email()),
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "email", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "language", void 0);
__decorate([
    Class.Public()
], Entity.prototype, "fullName", null);
Entity = __decorate([
    RestDB.Schema.Entity('invitations'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map