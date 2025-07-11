/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export const OctopusDeployIcon = (props: SvgIconProps) => (
  <SvgIcon {...props} viewBox="0 0 140 140">
    <defs>
      <style>.cls-1&#123;fill:#fff;&#125;</style>
    </defs>
    <path
      className="cls-1"
      d="M19.13 103.13c9.35-6 20.33-16.34 16.16-28.5C33 68 29.87 62.33 29.45 55.17a43.84 43.84 0 0 1 2.66-17.83C40.49 14.85 65.4 4.2 87.92 11c20.85 6.26 35.2 30.48 26.56 51.58-5 12.18-7.22 21.58 3.9 31.05 3 2.57 10.33 6.42 10.31 11 0 6-11.74-1.27-13-2.31 1.49 2.6 16.24 18 6.85 19.08-8.64 1-16.27-11.06-21.47-16.25-8.72-8.7-7.21 10.55-7.25 14.53-.06 6.28-4.5 19-12.46 10.72-6.58-6.84-4.09-17.76-8.66-25.36-5-8.33-13.34 8.33-15.42 11.37-2.33 3.4-14 19.89-18.59 11.1-3.76-7.13 2.25-18.3 5.2-24.75-1.08 2.34-8.71 5.8-10.94 6.93-5 2.54-10.15 4.05-15.82 3.65-11.73-.84-2.73-7.07 2-10.15z"
    />
  </SvgIcon>
);
