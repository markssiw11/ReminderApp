import {format} from 'date-fns';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const today = format(new Date(), 'yyyy-MM-dd');

const List = () => {
  LocaleConfig.locales.vi = getLocalConfig();
  LocaleConfig.defaultLocale = 'vi';
  return (
    <SafeAreaView>
      <Calendar
        current={today}
        markingType={'multi-dot'}
        markedDates={{
          [today]: {selected: true},
        }}
      />
    </SafeAreaView>
  );
};

export const getLocalConfig = () => {
  return {
    monthNames: [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
      'Tháng 7',
      'Tháng 8',
      'Tháng 9',
      'Tháng 10',
      'Tháng 11',
      'Tháng 12',
    ],
    monthNamesShort: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
    ],
    dayNames: [
      'Chủ Nhật',
      'Thứ 2',
      'Thứ 3',
      'Thứ 4',
      'Thứ 5',
      'Thứ 6',
      'Thứ 7',
    ],
    dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  };
};
export default List;
