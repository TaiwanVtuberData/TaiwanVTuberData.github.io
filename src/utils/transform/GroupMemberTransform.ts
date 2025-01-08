import { VTuberData } from '../../types/ApiData/VTuberData';
import { GroupMemberDisplayData } from '../../types/TableDisplayData/GroupMemberDisplayData';
import { VTuberBasicToDisplay } from './BasicTransform';

export const GroupMemberToDisplay = (
  e: VTuberData,
): GroupMemberDisplayData => ({
  ...VTuberBasicToDisplay(e),
});
