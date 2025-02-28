import { createSelector } from 'reselect';
import { RechartsRootState } from '../store';
import { ChartPointer } from '../../chart/generateCategoricalChart';
import { ActiveTooltipProps } from '../tooltipSlice';
import { selectChartLayout } from '../../context/chartLayoutContext';
import { selectTooltipAxisRangeWithReverse, selectTooltipAxisTicks, selectTooltipAxisType } from './tooltipSelectors';
import { selectChartOffset } from './selectChartOffset';
import { combineActiveProps, selectOrderedTooltipTicks } from './selectors';
import { selectPolarViewBox } from './polarAxisSelectors';

const pickChartPointer = (_state: RechartsRootState, chartPointer: ChartPointer) => chartPointer;

export const selectActivePropsFromChartPointer: (
  state: RechartsRootState,
  chartPointer: ChartPointer,
) => ActiveTooltipProps = createSelector(
  [
    pickChartPointer,
    selectChartLayout,
    selectPolarViewBox,
    selectTooltipAxisType,
    selectTooltipAxisRangeWithReverse,
    selectTooltipAxisTicks,
    selectOrderedTooltipTicks,
    selectChartOffset,
  ],
  combineActiveProps,
);
