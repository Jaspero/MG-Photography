import {ComponentType} from '../../../shared/interfaces/component-type.enum';
import {GalleryComponent} from '../components/fields/gallery/gallery.component';
import {ImageComponent} from '../components/fields/image/image.component';
import {InputComponent} from '../components/fields/input/input.component';
import {SelectComponent} from '../components/fields/select/select.component';

export const COMPONENT_TYPE_COMPONENT_MAP = {
  [ComponentType.Input]: InputComponent,
  [ComponentType.Select]: SelectComponent,
  [ComponentType.Image]: ImageComponent,
  [ComponentType.Gallery]: GalleryComponent
};