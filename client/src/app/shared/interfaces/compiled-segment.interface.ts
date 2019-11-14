import {InstanceSegment} from './module.interface';
import {CompiledField} from '../../modules/module-instance/interfaces/compiled-field.interface';
import {ComponentPortal} from '@angular/cdk/portal';
import {SegmentComponent} from '../../modules/module-instance/components/segment/segment.component';

export interface CompiledSegment<T = any> extends InstanceSegment<T> {
  classes: string[];
  fields: CompiledField[] | string[];
  component?: ComponentPortal<SegmentComponent>;
  nestedSegments?: CompiledSegment<T>[];
  entryValue: any;
}