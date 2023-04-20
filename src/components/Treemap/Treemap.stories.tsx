import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Treemap from './Treemap'

export default {
  title: 'Tree/Treemap',
  component: Treemap,
} as ComponentMeta<typeof Treemap>

const Template: ComponentStory<typeof Treemap> = (args) => <Treemap {...args} />

export const TreemapOne = Template.bind({})
TreemapOne.args = {
    treemap: [
        {
            "label": "root",
            "parentLabel": null,
            "importance": null
        },
        {
            "label": "Intercept",
            "parentLabel": "root",
            "importance": 0,
            "coefficient": 0.2855196439068237
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "root",
            "importance": 20.49137559691252,
            "coefficient": 1.2335061911550749
        },
        {
            "label": "Cos(8; hours) & Cos(12; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(8; hours)",
            "parentLabel": "Cos(8; hours) & Cos(12; hours)",
            "importance": 4.748863770197311,
            "coefficient": -20.726109418803873
        },
        {
            "label": "Cos(12; hours)",
            "parentLabel": "Cos(8; hours) & Cos(12; hours)",
            "importance": 4.748863770197311,
            "coefficient": -20.726109418803873
        },
        {
            "label": "Cos(12; hours) & DoW(t-5) ≤ Friday",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(12; hours)",
            "parentLabel": "Cos(12; hours) & DoW(t-5) ≤ Friday",
            "importance": 3.3096983819945214,
            "coefficient": -18.103922175639443
        },
        {
            "label": "DoW(t-5) ≤ Friday",
            "parentLabel": "Cos(12; hours) & DoW(t-5) ≤ Friday",
            "importance": 3.3096983819945214,
            "coefficient": -18.103922175639443
        },
        {
            "label": "cnt(t-1) & EMA_cnt(t-1; w=2)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "cnt(t-1) & EMA_cnt(t-1; w=2)",
            "importance": 4.097613875736663,
            "coefficient": -0.023152457228734057
        },
        {
            "label": "EMA_cnt(t-1; w=2)",
            "parentLabel": "cnt(t-1) & EMA_cnt(t-1; w=2)",
            "importance": 4.097613875736663,
            "coefficient": -0.023152457228734057
        },
        {
            "label": "cnt(t-1) & EMA_cnt(t-1; w=4)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "cnt(t-1) & EMA_cnt(t-1; w=4)",
            "importance": 4.2919630637073585,
            "coefficient": 0.021745821054344073
        },
        {
            "label": "EMA_cnt(t-1; w=4)",
            "parentLabel": "cnt(t-1) & EMA_cnt(t-1; w=4)",
            "importance": 4.2919630637073585,
            "coefficient": 0.021745821054344073
        },
        {
            "label": "Cos(8; hours) & DoW(t-5) ≤ Friday",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(8; hours)",
            "parentLabel": "Cos(8; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.7727912116386166,
            "coefficient": 8.502026020880189
        },
        {
            "label": "DoW(t-5) ≤ Friday",
            "parentLabel": "Cos(8; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.7727912116386166,
            "coefficient": 8.502026020880189
        },
        {
            "label": "Cos(4; hours) & DoW(t-5) ≤ Friday",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(4; hours)",
            "parentLabel": "Cos(4; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.266075604670008,
            "coefficient": 8.446791253080226
        },
        {
            "label": "DoW(t-5) ≤ Friday",
            "parentLabel": "Cos(4; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.266075604670008,
            "coefficient": 8.446791253080226
        },
        {
            "label": "Sin(3; hours) & DoW(t-5) ≤ Friday",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Sin(3; hours)",
            "parentLabel": "Sin(3; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.541953693150318,
            "coefficient": -7.979259177321925
        },
        {
            "label": "DoW(t-5) ≤ Friday",
            "parentLabel": "Sin(3; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.541953693150318,
            "coefficient": -7.979259177321925
        },
        {
            "label": "Cos(8; hours) & Sin(3; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(8; hours)",
            "parentLabel": "Cos(8; hours) & Sin(3; hours)",
            "importance": 2.8204873580954812,
            "coefficient": -11.979666477411444
        },
        {
            "label": "Sin(3; hours)",
            "parentLabel": "Cos(8; hours) & Sin(3; hours)",
            "importance": 2.8204873580954812,
            "coefficient": -11.979666477411444
        },
        {
            "label": "Cos(6; hours) & DoW(t-5) ≤ Friday",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(6; hours)",
            "parentLabel": "Cos(6; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.7105522878512103,
            "coefficient": 4.388603176802615
        },
        {
            "label": "DoW(t-5) ≤ Friday",
            "parentLabel": "Cos(6; hours) & DoW(t-5) ≤ Friday",
            "importance": 2.7105522878512103,
            "coefficient": 4.388603176802615
        },
        {
            "label": "Cos(24; hours) & Sin(3; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(24; hours)",
            "parentLabel": "Cos(24; hours) & Sin(3; hours)",
            "importance": 1.2557079839190626,
            "coefficient": 4.413053140963686
        },
        {
            "label": "Sin(3; hours)",
            "parentLabel": "Cos(24; hours) & Sin(3; hours)",
            "importance": 1.2557079839190626,
            "coefficient": 4.413053140963686
        },
        {
            "label": "cnt(t-1) & Cos(3; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "cnt(t-1) & Cos(3; hours)",
            "importance": 1.088112817507198,
            "coefficient": -0.07831218280917539
        },
        {
            "label": "Cos(3; hours)",
            "parentLabel": "cnt(t-1) & Cos(3; hours)",
            "importance": 1.088112817507198,
            "coefficient": -0.07831218280917539
        },
        {
            "label": "Sin(24; hours)",
            "parentLabel": "root",
            "importance": 2.314162699343578,
            "coefficient": 11.572695626298994
        },
        {
            "label": "cnt(t-1) & Cos(12; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "cnt(t-1) & Cos(12; hours)",
            "importance": 1.186419839240363,
            "coefficient": -0.40388878653892624
        },
        {
            "label": "Cos(12; hours)",
            "parentLabel": "cnt(t-1) & Cos(12; hours)",
            "importance": 1.186419839240363,
            "coefficient": -0.40388878653892624
        },
        {
            "label": "Cos(12; hours)",
            "parentLabel": "root",
            "importance": 2.673250470447511,
            "coefficient": 17.449086884967855
        },
        {
            "label": "cnt(t-1) & Cos(24; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "cnt(t-1)",
            "parentLabel": "cnt(t-1) & Cos(24; hours)",
            "importance": 1.6289629694123766,
            "coefficient": -0.20631873145446308
        },
        {
            "label": "Cos(24; hours)",
            "parentLabel": "cnt(t-1) & Cos(24; hours)",
            "importance": 1.6289629694123766,
            "coefficient": -0.20631873145446308
        },
        {
            "label": "Cos(6; hours) & Sin(24; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(6; hours)",
            "parentLabel": "Cos(6; hours) & Sin(24; hours)",
            "importance": 1.3828720380499306,
            "coefficient": 10.769729973134288
        },
        {
            "label": "Sin(24; hours)",
            "parentLabel": "Cos(6; hours) & Sin(24; hours)",
            "importance": 1.3828720380499306,
            "coefficient": 10.769729973134288
        },
        {
            "label": "Cos(12; hours) & Sin(3; hours)",
            "parentLabel": "root",
            "importance": null
        },
        {
            "label": "Cos(12; hours)",
            "parentLabel": "Cos(12; hours) & Sin(3; hours)",
            "importance": 1.1585307214777774,
            "coefficient": 6.1484989512059505
        },
        {
            "label": "Sin(3; hours)",
            "parentLabel": "Cos(12; hours) & Sin(3; hours)",
            "importance": 1.1585307214777774,
            "coefficient": 6.1484989512059505
        }
    ],
    predictorPalette: [
    {
        "variable": "cnt",
        "minimumValue": 1,
        "name": "cnt",
        "maximumValue": 249,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 2,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 52.24731182795699,
        "color": "#5573F7",
        "textColor": "#EBECF0"
    },
    {
        "variable": "windspeed",
        "minimumValue": 0,
        "name": "windspeed",
        "maximumValue": 5821,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 3,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 1857.9059139784947,
        "color": "#2941AB",
        "textColor": "#EBECF0"
    },
    {
        "variable": "hum_p",
        "minimumValue": 21,
        "name": "hum_p",
        "maximumValue": 100,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 4,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 59.20161290322581,
        "color": "#5CC8D0",
        "textColor": "#2c2835"
    },
    {
        "variable": "temp_o",
        "minimumValue": 127,
        "name": "temp_o",
        "maximumValue": 2962,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 5,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 1346.9932795698924,
        "color": "#499988",
        "textColor": "#EBECF0"
    },
    {
        "variable": "atemp_o",
        "minimumValue": -154832,
        "name": "atemp_o",
        "maximumValue": -16,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 6,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": -73195.42876344085,
        "color": "#BBF0CA",
        "textColor": "#2c2835"
    },
    {
        "variable": "holiday",
        "minimumValue": 0,
        "name": "holiday",
        "maximumValue": 1,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 7,
        "type": "Boolean",
        "missingObservations": 0,
        "averageValue": 0.04838709677419355,
        "color": "#57CE5C",
        "textColor": "#EBECF0"
    }
]
}
