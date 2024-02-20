
import { Element } from "../types";

export const  formatPeriodicTableData = (data: Element[], isInverted: boolean) => {
    return data.map((el) => {
      let newRow = el.row;
      let newColumn = el.column;
  
      // Adjust row and column based on atomicNumber and inversion state for Lanthanium
      if (isInverted) {
        if (el.atomicNumber === 57) {
          newRow = 2;
        } else if (el.atomicNumber === 89) {
          newRow = 1;
        } else if (el.atomicNumber === 71) {
          newRow = 4;
          newColumn = 3;
        } else if (el.atomicNumber === 103) {
          newRow = 3;
          newColumn = 3;
        } else {
          newRow = 10 - el.row;
        }
      } else {
        if (el.atomicNumber === 57) {
          newRow = 8;
        } else if (el.atomicNumber === 89) {
          newRow = 9;
        } else if (el.atomicNumber === 71) {
          newRow = 6;
          newColumn = 3;
        } else if (el.atomicNumber === 103) {
          newRow = 7;
          newColumn = 3;
        }
      }
  
      return { ...el, row: newRow, column: newColumn };
    });
  }