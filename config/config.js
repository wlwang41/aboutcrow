// Copyright 2013 Clark DuVall
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var CONFIG = CONFIG || {};

CONFIG.prompt = function(cwd, user) {
   if (user)
      return '<span class="user">(' + user +
          ')</span>@<span class="host"><a href="http://about.me/wlwang41" target="_blank">wlwang\'home</a></span>:<span class="cwd">' +
          cwd + '</span>$ ';
   return '                             __ _._.,._.__\n' +
          '                         .o8888888888888888P\n' +
          '                       .d88888888888888888K\n' +
          '         ,8            888888888888888888888boo._\n' +
          '        :88b           888888888888888888888888888b.\n' +
          '         `Y8b          88888888888888888888888888888b.\n' +
          '           `Yb.       d8888888888888888888888888888888b\n' +
          '             `Yb.___.88888888888888888888888888888888888b\n' +
          '               `Y888888888888888888888888888888CG88888P"\n' +
          '                 `88888888888888888888888888888MM88P"\n' +
          '"Y888K    "Y8P""Y888888888888888888888888oo._""""\n' +
          '  88888b    8    8888`Y88888888888888888888888oo.\n' +
          '  8"Y8888b  8    8888  ,8888888888888888888888888o,\n' +
          '  8  "Y8888b8    8888""Y8`Y8888888888888888888888b.\n' +
          '  8    "Y8888    8888   Y  `Y8888888888888888888888\n' +
          '  8      "Y88    8888     .d `Y88888888888888888888b\n' +
          '.d8b.      "8  .d8888b..d88P   `Y88888888888888888888\n' +
          '                                 `Y88888888888888888b.\n' +
          '                  "Y888P""Y8b. "Y888888888888888888888\n' +
          '                    888    888   Y888`Y888888888888888\n' +
          '                    888   d88P    Y88b `Y8888888888888\n' +
          '                    888"Y88K"      Y88b dPY8888888888P\n' +
          '                    888  Y88b       Y88dP  `Y88888888b\n' +
          '                    888   Y88b       Y8P     `Y8888888\n' +
          '                  .d888b.  Y88b.      Y        `Y88888\n' +
          '                                                 `Y88K\n' +
          '                                                   `Y8\n' +
          '                                                     "\n' +
          'INITIAL SYSTEM $ ';
};

CONFIG.username = '';
