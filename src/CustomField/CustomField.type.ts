import { BaseSingleInputFieldProps, FieldSection } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { SxProps, Theme } from '@mui/system';
import { MouseEvent } from 'react';

export interface ICustomFieldProps extends BaseSingleInputFieldProps<Dayjs | null, Dayjs, FieldSection, any> {
    dateString: string
    sx?: SxProps<Theme>
    onClick: (e: MouseEvent) => void
}