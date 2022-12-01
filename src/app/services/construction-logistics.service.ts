import { Injectable } from '@angular/core';
import { IPiece } from '../interfaces/piece.interface';
//import { ISaleUnit } from '../interfaces/saleUnit.interface';
import { ISet } from '../interfaces/set.interface';
import { ApiHelperService } from './api-helper.service';
import { IConstruction } from '../interfaces/construction.interface';
import { IProjectLocation } from '../interfaces/projectLocation.interface';

const CONSTRUCTION_CONTROLLER = 'project';
const PIECE_CONTROLLER = 'piece';
const SET_CONTROLLER = 'set';
const SALE_UNIT_CONTROLLER = 'saleUnit';
const ORDER_CONTROLLER = 'order';
const PROJECT_CONTROLLER = 'project';
const LOCATION_CONTROLLER = 'locations';

@Injectable({
  providedIn: 'root'
})
export class ConstructionLogisticsService {
  createProperty: any;
  constructor(private apiHelper: ApiHelperService) {}

  // Projects
  getProjects = () => this.apiHelper.getAsync(CONSTRUCTION_CONTROLLER);

  // createProject = (body: IConstruction) => {
  //   console.log(body);
  //   this.apiHelper.postAsync(CONSTRUCTION_CONTROLLER, { body });
  // };

  // updateProject = (projectId: string, body: IConstruction) =>
  //   this.apiHelper.updateAsync(CONSTRUCTION_CONTROLLER, {
  //     path: projectId,
  //     body
  //   });

  // deleteProject = (projectId: string) =>
  //   this.apiHelper.deleteAsync(CONSTRUCTION_CONTROLLER, {
  //     path: '' + projectId
  //   });

  createProject = (body: IConstruction) => {
    console.log(body);
    this.apiHelper.postAsync(CONSTRUCTION_CONTROLLER, { body });
  };

  updateProject = (projectId: string, body: IConstruction) =>
    this.apiHelper.updateAsync(CONSTRUCTION_CONTROLLER, {
      path: projectId,
      body
    });

  deleteProject = (projectId: string) =>
    this.apiHelper.deleteAsync(CONSTRUCTION_CONTROLLER, {
      path: '' + projectId
    });

  // Pieces
  getPiecesByType = (type: string) =>
    this.apiHelper.getAsync(PIECE_CONTROLLER, { query: `type=${type}` });

  // Sets
  getSetsList = () => this.apiHelper.getAsync(SET_CONTROLLER);

  createSet = (body: ISet) => {
    console.log(body);
    this.apiHelper.postAsync(SET_CONTROLLER, { body });
  };

  updateSet = (setId: string, body: ISet) =>
    this.apiHelper.updateAsync(SET_CONTROLLER, { path: setId, body });

  deleteSet = (setId: string) =>
    this.apiHelper.deleteAsync(SET_CONTROLLER, { path: '' + setId });

  ////////////////

  getPieceList = () => this.apiHelper.getAsync(PIECE_CONTROLLER);

  createPiece = (body: IPiece) =>
    this.apiHelper.postAsync(PIECE_CONTROLLER, { body });

  updatePiece = (pieceId: string, body: IPiece) =>
    this.apiHelper.updateAsync(PIECE_CONTROLLER, { path: '' + pieceId, body });

  deletePiece = (pieceId: string) =>
    this.apiHelper.deleteAsync(PIECE_CONTROLLER, { path: '' + pieceId });

  //////////////////

  getProjectOrdersWithQuantity = async (projectId: any) => {
    const orders = await this.apiHelper.getAsync(PROJECT_CONTROLLER, {
      path: '' + projectId + '/orders/quantity/saleUnits'
    });
    return orders.length;
  };

  getProjectOrders = (projectId: any) =>
    this.apiHelper.getAsync(PROJECT_CONTROLLER, {
      path: '' + projectId + '/orders'
    });

  getOrder = () => this.apiHelper.getAsync(ORDER_CONTROLLER);

  //////////////////
  getProjectLocation = (projectId: any) =>
    this.apiHelper.getAsync(PROJECT_CONTROLLER, {
      path: '' + projectId + '/locations'
    });

  createLocation = (projectId: any, body: IProjectLocation) =>
    this.apiHelper.postAsync(PROJECT_CONTROLLER, {
      path: '' + projectId + '/locations',
      body
    });

  updateLocation = (
    projectId: string,
    projectLocationId: any,
    body: IProjectLocation
  ) =>
    this.apiHelper.updateAsync(PROJECT_CONTROLLER, {
      path: '' + projectId + '/locations/' + projectLocationId,
      body
    });
}