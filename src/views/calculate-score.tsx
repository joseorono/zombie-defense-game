import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import { userScoreAtom } from '~/store/atoms';
import { useAtomValue } from 'jotai';

export const CalculateScoreView = () => {
  const [adultCivilians, setAdultCivilians] = useState(0);
  const [childCivilians, setChildCivilians] = useState(0);
  const [daysSurvived, setDaysSurvived] = useState(0);
  const [unitsRemaining, setUnitsRemaining] = useState(0);
  const [pointsFromdays, setPointsFromdays] = useState(0);
  const [pointsFromCivilians, setPointsFromCivilians] = useState(0);
  const [pointsFromWeaponUpgrades, setPointsFromWeaponUpgrades] = useState(0);
  const [pointsFromResources, setPointsFromResources] = useState(0);
  const score = useAtomValue(userScoreAtom);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAdultCivilians(score.civilianAdultCount);
      setChildCivilians(score.civilianAdultCount);
      setDaysSurvived(score.daysSurvived);
      setUnitsRemaining(score.unitsRemaining);
      setPointsFromdays(score.pointsFromdays);
      setPointsFromCivilians(score.pointsFromCivilians);
      setPointsFromWeaponUpgrades(score.pointsFromWeaponUpgrades);
      setPointsFromResources(score.pointsFromResources);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* <b>Adult Civilians: </b>
      <Odometer value={adultCivilians} format="(.ddd),dd" />
      <br />
      <b>Child Civilians: </b>
      <Odometer value={childCivilians} format="(.ddd),dd" /> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>adultCivilians</td>
              <td>
                <Odometer value={adultCivilians} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>childCivilians</td>
              <td>
                <Odometer value={childCivilians} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>daysSurvived</td>
              <td>
                <Odometer value={daysSurvived} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>unitsRemaining</td>
              <td>
                <Odometer value={unitsRemaining} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 5 */}
            <tr>
              <th>5</th>
              <td>pointsFromdays</td>
              <td>
                <Odometer value={pointsFromdays} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 6 */}
            <tr>
              <th>6</th>
              <td>pointsFromCivilians</td>
              <td>
                <Odometer value={pointsFromCivilians} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 7 */}
            <tr>
              <th>7</th>
              <td>pointsFromWeaponUpgrades</td>
              <td>
                <Odometer value={pointsFromWeaponUpgrades} format="(.ddd),dd" />
              </td>
            </tr>
            {/* row 8 */}
            <tr>
              <th>8</th>
              <td>pointsFromResources</td>
              <td>
                <Odometer value={pointsFromResources} format="(.ddd),dd" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <>
      <div className="w-dvh relative h-dvh">
        {' '}
        {/* Al relative, y tienes que ponerle para que ocupa toda tu pantalla le pones la imagen de fondo con su ID o con una clase */}
        <div className="absolute left-0 top-0 z-0">
          {/* Ponle el background-color al overlay, con RGBA o con opacity */}
        </div>
        <div>{/*Aca si poneis tu contenido */}</div>
      </div>
    </>
  );
};
