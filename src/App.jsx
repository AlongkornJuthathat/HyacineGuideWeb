import { useState } from 'react'
import Accordion from './Accordion';
import './App.css'


function App() {
  const [traceActiveButton, setTraceActiveButton] = useState('basic');
  const [memoTraceActiveButton, setMemoTraceActiveButton] = useState('memo_skill');
  const [eidolonActiveButton, setEidolonActiveButton] = useState('eidolon1');
  
  // trace description box
  const traceContentMap = {
      basic:  <div class="container">
                <div class="trace-header-grid">
                  <img id="basic-atk-img" src="/Basic_ATK.png" width="50" height="50"/>
                  <div class="skill-type">
                    Basic ATK |&nbsp;<em>When Breeze Kisses Cirrus</em>
                  </div>
                </div>
                <Accordion title="Trace Description">
                  <img class="gif" id="basic-atk-gif" src="/BasicATK.gif" width="50%"/>
                  <p><em><strong>When Breeze Kisses Cirrus</strong> [Single Target]</em></p><br></br>
                  <p>
                    Deals Wind DMG equal to
                    <span class="percentage-number"> 25/50/55% </span>
                    of Hyacine's Max HP to a designated enemy target.
                  </p>
                </Accordion>
                <div class="block-spacer-small"></div>
                <div class="trace-comment">
                  <p>
                    A standard HP-scaling Basic ATK, can do ok damage, but is not worth using as it does not help Hyacine healing, unless she is using Signature Light Cone.
                  </p>
                </div>
              </div>,
      skill:  <div class="container">
                <div class="trace-header-grid">
                  <img id="skill-img" src="/Skill.png" width="50" height="50"/>
                  <div class="skill-type">
                    Skill |&nbsp;<em>Love Over the Rainbow</em>
                  </div>
                </div>
                <Accordion title="Trace Description">
                  <img class="gif" id="skill-gif" src="/Skill.gif" width="50%"/>
                  <p><em><strong>Love Over the Rainbow</strong> [Restore]</em></p><br></br>
                  <p>
                    <span><u>Summon Memosprite</u> </span>
                    Little Ica, restores HP equal to
                    <span class="percentage-number"> 4/8/8.8% </span>
                    of Hyacine's Max HP plus
                    <span class="percentage-number"> 40/160/178 </span>
                    for all allies aside from Little Ica, and restores HP equal to
                    <span class="percentage-number"> 5/10/11% </span>
                    of Hyacine's Max HP plus
                    <span class="percentage-number"> 50/200/222.5 </span>
                    for Little Ica.
                  </p>
                </Accordion>
                <div class="block-spacer-small"></div>
                <div class="trace-comment">
                  <p>
                    A very nice teamwide heal, Provide teamwide healing with a good amount. With A4 bonus, Hyacine will be able to cleanse 1 debuff from all allies.
                  </p>
                </div>
              </div>,
      ultimate: <div class="container">
                  <div class="trace-header-grid">
                    <img id="ultimate-img" src="/Ultimate.png" width="50" height="50"/>
                    <div class="skill-type">
                      Ultimate |&nbsp;<em>We Who Fly Into Twilight</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="ultimate-gif" src="/Ultimate.gif" width="50%"/>
                    <p><em><strong>We Who Fly Into Twilight</strong> [Support]</em></p><br></br>
                    <p>
                      <span><u>Summon Memosprite</u> </span>
                      Little Ica, restores HP equal to
                      <span class="percentage-number"> 5/10/11% </span>
                      of Hyacine's Max HP plus
                      <span class="percentage-number"> 50/200/222.5 </span>
                      for all allies aside from Little Ica, and restores HP equal to
                      <span class="percentage-number"> 6/12/13.2% </span>
                      of Hyacine's Max HP plus
                      <span class="percentage-number"> 60/240/267 </span>
                      for Little Ica. Hyacine enters the "After Rain" state for <strong>3</strong> turn(s) afterward. Reduces the state's duration by 1 turn each time Hyacine's turn begins. When in "After Rain" state, increases Max HP for all allies by
                      <span class="percentage-number"> 15/30/33% </span>
                      plus
                      <span class="percentage-number"> 150/600/667.5</span>.
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      Great team support Ultimate, provide max HP increases buff to all allies up to 30% plus 600 at Lv. 10. This Ultimate synergizes especially well with units who were HP-scaling.
                      Extra Max HP is a massive boost to survivability for the entire team.
                      max HP buff also affects Hyacine herself, meaning that all of her healing is also greatly increased in the process.
                    </p>
                  </div>
                </div>,
      talent:   <div class="container">
                  <div class="trace-header-grid">
                    <img id="talent-img" src="/Talent.png" width="50" height="50"/>
                    <div class="skill-type">
                      Talent |&nbsp;<em>First Light Heals the World</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="talent-gif" src="/talent.gif" width="50%"/>
                    <p><em><strong>First Light Heals the World</strong> [Enhance]</em></p><br></br>
                    <p>
                      The memosprite Little Ica initially has Max HP equal to <strong>50%</strong> of Hyacine's Max HP. When Hyacine or Little Ica provides healing, increases Little Ica's DMG dealt by
                      <span class="percentage-number"> 40/80/88% </span>
                      for <strong>2</strong> turn(s). Stacks up to <strong>3</strong> time(s).
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      An extremely strong Talent for increasing Hyacine' personal damage, this made Hyacine become a sustain unit who is capable of dealing pretty remarkable damage.
                    </p>
                  </div>
                </div>,
    technique:  <div class="container">
                  <div class="trace-header-grid">
                    <img id="technique-img" src="/Technique.png" width="50" height="50"/>
                    <div class="skill-type">
                      Technique |&nbsp;<em>Day So Right, Life So Fine!</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="technique-gif" src="/Technique.gif" width="50%"/>
                    <p><em><strong>Day So Right, Life So Fine!</strong> [Restore]</em></p><br></br>
                    <p>
                      At the start of the next battle, restores HP equal to <strong>30%</strong> of Hyacine's Max HP plus <strong>600 </strong> for all allies and increases their Max HP by <strong>20%</strong> for <strong>2</strong> turn(s).
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      Nice heal and max HP increase for all allies for 2 turns at the start of battle.
                    </p>
                  </div>
                </div>,
    a2:         <div class="container">
                  <div class="trace-header-grid">
                    <img id="a2-img" src="/A2.png" width="50" height="50"/>
                    <div class="skill-type">
                      A2 Bonus Ability |&nbsp;<em>Gloomy Grin</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="a2-gif" src="/A2.gif" width="50%"/>
                    <p><em><strong>Gloomy Grin</strong></em></p><br></br>
                    <p>
                      Increases Hyacine and Little Ica's CRIT Rate by
                      <span class="percentage-number"> 100%</span>.
                      When providing healing to an ally target with less than or equal to
                      <span class="percentage-number"> 50% </span>
                      this unit's Max HP, increases Hyacine and Little Ica's Outgoing Healing by
                      <span class="percentage-number"> 25%</span>.
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      Hyacine and Little will always guaranteed to crit, this let her build can ignore CRIT Rate and purely focus into CRIT DMG if want to increase her personal damage.
                    </p>
                  </div>
                </div>,
    a4:         <div class="container">
                  <div class="trace-header-grid">
                    <img id="a4-img" src="/A4.png" width="50" height="50"/>
                    <div class="skill-type">
                      A4 Bonus Ability |&nbsp;<em>Stormy Caress</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="a2-gif" src="/A4.gif" width="50%"/>
                    <p><em><strong>Stormy Caress</strong></em></p><br></br>
                    <p>
                      Increases Hyacine's Effect RES by
                      <span class="percentage-number"> 50%</span>.
                      When using Skill and Ultimate, dispels
                      <span class="percentage-number"> 1 </span>
                      <u>debuff(s)</u> from all ally targets.
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      A very nice extra 50% Effect RES. She also will be able to cleanse debuff from all allies by using her Skill or Ultimate.
                    </p>
                  </div>
                </div>,
    a6:         <div class="container">
                  <div class="trace-header-grid">
                    <img id="a6-img" src="/A6.png" width="50" height="50"/>
                    <div class="skill-type">
                      A6 Bonus Ability |&nbsp;<em>Tempestuous Halt</em>
                    </div>
                  </div>
                  <Accordion title="Trace Description">
                    <img class="gif" id="a6-gif" src="/A6.gif" width="50%"/>
                    <p><em><strong>Tempestuous Halt</strong></em></p><br></br>
                    <p>
                      When Hyacine's SPD exceeds
                      <span class="percentage-number"> 200</span>,
                      increases her and Little Ica's Max HP by
                      <span class="percentage-number"> 20%</span>.
                      Then, for every
                      <span class="percentage-number"> 1 </span>
                      excess SPD, increases Hyacine's and Little Ica's Outgoing Healing by
                      <span class="percentage-number"> 1%</span>.
                      Up to a max of
                      <span class="percentage-number"> 200 </span>
                      excess SPD can be taken into account for this effect.
                    </p>
                  </Accordion>
                  <div class="block-spacer-small"></div>
                  <div class="trace-comment">
                    <p>
                      200 SPD in combat may seems hard to achieve in regular gameplay, but surprisingly easy to reach for Hyacine. This extra Outgoing Healing boost will boost Hyacine' healing even greater.
                    </p>
                  </div>
                </div>,
  };

  // memosprite description box
  const memoTraceContentMap = {
      memo_skill:   <div class="container">
                      <div class="trace-header-grid">
                        <img id="memo-skill-img" src="/memo_skill.png" width="50" height="50"/>
                        <div class="skill-type">
                          Memosprite Skill |&nbsp;<em>Rainclouds, Time to Go!</em>
                        </div>
                      </div>
                      <Accordion title="Memosprite Trace Description">
                        <img class="gif" id="memo-skill-gif" src="/MemoSkill.gif" width="50%"/>
                        <p><em><strong>Rainclouds, Time to Go!</strong> [AoE]</em></p><br></br>
                        <p>
                          Deals Wind DMG to all enemies equal to
                          <span class="percentage-number"> 10/20/22% </span>
                          of the tally of healing done by Hyacine and Little Ica in the current battle, and clears <strong>50%</strong> of the tally of healing.
                        </p>
                      </Accordion>
                      <div class="block-spacer-small"></div>
                      <div class="trace-comment">
                        <p>
                          An extremely strong AoE ability. Damage is calculated based on Tally of Healing done by both Hyacine and Little in the battle, meaning the more Hyacine and Little Ica heal, more damage this ability deal.
                        </p>
                      </div>
                    </div>,
      memo_talent1:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent1-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Memosprite Talent |&nbsp;<em>Take Sky in Hand</em>
                          </div>
                        </div>
                        <Accordion title="Memosprite Trace Description">
                          <img class="gif" id="memo_talent1-gif" src="/memo_talent1.gif" width="50%"/>
                          <p><em><strong>Take Sky in Hand</strong> [Restore]</em></p><br></br>
                          <p>
                            Little Ica's SPD remains at 0, is immune to <u>debuffs</u>, and they will not appear on the Action Order.
                            If ally targets (except Little Ica) have their HP reduced, then Little Ica will consume HP equal to <strong>4%</strong> of their own Max HP and restore HP equal to
                            <span class="percentage-number"> 1/2/2.2% </span>
                            of Hyacine's Max HP plus
                            <span class="percentage-number"> 10/20/22 </span>
                            for the ally target with reduced HP at the start of any target's turn or after any target takes action.
                            While Hyacine is in the "After Rain" state, Little Ica immediately obtains 1 <u>extra turn</u> and automatically uses "Rainclouds, Time to Go!" after Hyacine uses an ability.
                            Moreover, when Little Ica triggers their Talent's healing effect, additionally restores HP for all ally targets by an amount equal to
                            <span class="percentage-number"> 1/2/2.2% </span>
                            of Hyacine's Max HP plus
                            <span class="percentage-number"> 10/20/22</span>.
                            After Little Ica uses an ability, all <u>Continuous Effects</u>' duration decreases by 1 turn.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            Whenever ally HP is reduced for whatever reason, Little Ica will consume their own HP to restore allies HP, make it particularly easy to maintain a team with characters that sacrifice their life.
                          </p>
                        </div>
                      </div>,
      memo_talent2:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent2-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Memosprite Talent |&nbsp;<em>Soar, Unto the Sunlight</em>
                          </div>
                        </div>
                        <Accordion title="Memosprite Trace Description">
                          <img class="gif" id="memo_talent2-gif" src="/memo_talent2.gif" width="50%"/>
                          <p><em><strong>Soar, Unto the Sunlight</strong> [Enhance]</em></p><br></br>
                          <p>
                            When summoned, additionally regenerates <strong>15</strong> Energy for Hyacine. When first summoned, additionally regenerates <strong>30</strong> Energy.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            This extra energy when first summoned Little Ica make Hyacine consistently get a first turn Ultimate in the battle.
                          </p>
                        </div>
                      </div>,
      memo_talent3:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent3-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Memosprite Talent |&nbsp;<em>Fall, Then Take Wing</em>
                          </div>
                        </div>
                        <Accordion title="Memosprite Trace Description">
                          <img class="gif" id="memo_talent3-gif" src="/memo_talent3.gif" width="50%"/>
                          <p><em><strong>Fall, Then Take Wing</strong> [Enhance]</em></p><br></br>
                          <p>
                            Upon disappearing, <u>advances the action</u> of Hyacine by <strong>30%</strong>.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            A nice Action Advance whenever Little Ice falls, make it easy to resummon Little Ica.
                          </p>
                        </div>
                      </div>,
    }

    // eidolon description box 
    const eidolonContentMap = {
      eidolon1:   <div class="container">
                      <div class="trace-header-grid">
                        <img id="memo-skill-img" src="/memo_skill.png" width="50" height="50"/>
                        <div class="skill-type">
                          Eidolon 1 |&nbsp;<em>Cradle the Candle of Night</em>
                        </div>
                      </div>
                      <Accordion title="Eidolon Description">
                        <img class="gif" src="/E1_art.png" width="30%"/>
                        <p><em><strong>Cradle the Candle of Night</strong></em></p><br></br>
                        <p>
                          While Hyacine is in the "After Rain" state, all ally targets additionally increase their Max HP by
                          <span class="percentage-number"> 50%</span>
                          , and after using an attack, immediately restore their HP by an amount equal to
                          <span class="percentage-number"> 8% </span>
                          of Hyacine's Max HP.
                        </p>
                      </Accordion>
                      <div class="block-spacer-small"></div>
                      <div class="trace-comment">
                        <p>
                          An additional max HP increase when Hyacine's in the "After Rain" state, extremely strong for HP-scaling dps character and massive boost to survivability for the entire team.
                        </p>
                      </div>
                    </div>,
      eidolon2:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent1-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Eidolon 2 |&nbsp;<em>Come Sit in My Courtyard</em>
                          </div>
                        </div>
                        <Accordion title="Eidolon Description">
                          <img class="gif" src="/E2_art.webp" width="30%"/>
                          <p><em><strong>Come Sit in My Courtyard</strong></em></p><br></br>
                          <p>
                            When any ally target's HP decreases, this unit's SPD increases by
                            <span class="percentage-number"> 30% </span>
                            for
                            <span class="percentage-number"> 2 </span>
                            turn(s).
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            A very good eidolon. With Hyacine Signature Light Cone, she will be able to give this SPD to an entire team. This extra SPD also boost Hyacine Outgoing Healing boost when her SPD is exceed 200 and make her easy to reach certain SPD threshold.
                          </p>
                        </div>
                      </div>,
      eidolon3:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent2-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Eidolon 3 |&nbsp;<em>Depart, Unto the Sun!</em>
                          </div>
                        </div>
                        <Accordion title="Eidolon Description">
                          <img class="gif" src="/E3_art.webp" width="30%"/>
                          <p><em><strong>Depart, Unto the Sun!</strong></em></p><br></br>
                          <p>
                            Ultimate Lv. +2, up to a maximum of Lv.
                            <span class="percentage-number"> 15</span>.
                            <br></br>
                            Basic ATK Lv. +1, up to a maximum of Lv.
                            <span class="percentage-number"> 10</span>.
                            <br></br>
                            Memosprite Skill Lv. +1, up to a maximum of Lv.
                            <span class="percentage-number"> 10</span>.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            Slightly increases Hyacine's healing, max HP buff, and damage dealt by Little Ica. Not a particularly noticeable gain.
                          </p>
                        </div>
                      </div>,
      eidolon4:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent3-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Eidolon 4 |&nbsp;<em>Sunlit Amber, Yours to Keep</em>
                          </div>
                        </div>
                        <Accordion title="Eidolon Description">
                          <img class="gif" src="/E4_art.webp" width="30%"/>
                          <p><em><strong>Sunlit Amber, Yours to Keep</strong></em></p><br></br>
                          <p>
                            The "Tempestuous Halt" Trace is enhanced. For every
                            <span class="percentage-number"> 1 </span>
                            of SPD exceeded, additionally increases Hyacine and Little Ica's CRIT DMG by
                            <span class="percentage-number"> 2%</span>.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            An additional CRIT DMG increases for every point of SPD exceeded. This eidolon is a massive boost to Hyacine's personal damage.
                          </p>
                        </div>
                      </div>,
      eidolon5:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent3-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Eidolon 5 |&nbsp;<em>Twilight Drapes the Tide</em>
                          </div>
                        </div>
                        <Accordion title="Eidolon Description">
                          <img class="gif" src="/E5_art.webp" width="30%"/>                   
                          <p><em><strong>Twilight Drapes the Tide</strong></em></p><br></br>
                          <p>
                            Skill Lv. +2, up to a maximum of Lv.
                            <span class="percentage-number"> 15</span>.
                            <br></br>
                            Talent Lv. +2, up to a maximum of Lv.
                            <span class="percentage-number"> 15</span>.
                            <br></br>
                            Memosprite Talent Lv. +1, up to a maximum of Lv.
                            <span class="percentage-number"> 10</span>.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            Slightly increases Hyacine's healing and damage dealt by Little Ica. Not a particularly noticeable gain.
                          </p>
                        </div>
                      </div>,
      eidolon6:   <div class="container">
                        <div class="trace-header-grid">
                          <img id="memo-talent3-img" src="/memo_talent.png" width="50" height="50"/>
                          <div class="skill-type">
                            Eidolon 6 |&nbsp;<em>O Sky, Heed My Plea</em>
                          </div>
                        </div>
                        <Accordion title="Eidolon Description">
                          <img class="gif" src="/E6_art.webp" width="30%"/>
                          <p><em><strong>O Sky, Heed My Plea</strong></em></p><br></br>
                          <p>
                            Little Ica uses Memosprite Skill and changes the amount of Healing tally cleared to
                            <span class="percentage-number"> 12%</span>.
                            When Little Ica is on the field, increases all ally targets' All-Type RES PEN by
                            <span class="percentage-number"> 20%</span>.
                          </p>
                        </Accordion>
                        <div class="block-spacer-small"></div>
                        <div class="trace-comment">
                          <p>
                            One of the strongest eidolon for increasing personal damage in the entire game. Reduce the amount of Tally of Healing clears from 50% to 12% which is equivalent to a 417% increase in damage dealt.
                          </p>
                        </div>
                      </div>,
    }

  return (
    <>
    <div class="grid-container">
      <div class="left-side-page">
          <div class="table-of-content">
            <ol>
              <p><strong>Table of Contents</strong></p>
              <li>
                <a class="link-to-content" href="#Introduction">Introduction</a>
              </li>
              <li>
                <a class="link-to-content" href="#Infographic">Infographic</a>
              </li>
              <li>
                <a class="link-to-content" href="#Character-Overview">Character Overview</a>
                <ol>
                  <li>
                    <a class="link-to-content" href="#Playstyle">Playstyle</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Traces">Traces</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Memosprite-Traces">Memosprite Traces</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Traces-Priority">Traces Priority</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Eidolons">Eidolons</a>
                  </li>
                </ol>
              </li>
              <li>
                <a class="link-to-content" href="#Builds">Builds</a>
                <ol>
                  <li>
                    <a class="link-to-content" href="#Support-Builds">Support Builds</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Hypercarry-Builds">Hypercarry Builds</a>
                  </li>
                </ol>
              </li>
              <li>
                <a class="link-to-content" href="#E1-or-S1?">E1 or S1?</a>
              </li>
              <li>
                <a class="link-to-content" href="#Notable-Synergies">Notable Synergies</a>
                <ol>
                  <li>
                    <a class="link-to-content" href="#Damage-Dealers">Damage Dealers</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Damage-Amplifiers">Damage Amplifiers</a>
                  </li>
                </ol>
              </li>
              <li>
                <a class="link-to-content" href="#Notable-Anti-Synergies">Notable Anti-Synergies</a>
                <ol>
                  <li>
                    <a class="link-to-content" href="#Sustainers">Sustainers</a>
                  </li>
                </ol>
              </li>
              <li>
                <a class="link-to-content" href="#Remembrance-Trailblazer">Remembrance Trailblazer</a>
              </li>
              <li>
                <a class="link-to-content" href="#Teams">Teams</a>
                <ol>
                  <li>
                    <a class="link-to-content" href="#Healer-Flex">Healer Flex</a>
                  </li>
                  <li>
                    <a class="link-to-content" href="#Hypercarry-Hyacine">Hypercarry Hyacine</a>
                  </li>
                </ol>
              </li>
              <li>
                <a class="link-to-content" href="#Credits">Credits</a>
              </li>
              <li>
                <a class="link-to-content" href="#Changelog">Changelog</a>
              </li>
            </ol>
          </div>
      </div>

      {/* inside article part */}
      <div class="inside-article">
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text">Hyacine Guide</h1>
          </div>
        </div>

        {/* updated version */}
        <div class="container">
          <div id="updated-version">
            <i>Latest Updated for Version 3.4</i>
          </div>
        </div>

        {/* Hyacine's splash art */}
        <div class="container">
          <div>
            <img id="hyacine-splash-art" src="/Hyacine_Character_Splash_Art.webp"/>
          </div>
        </div>

        {/* introduction */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Introduction">Introduction</h1>
          </div>
        </div>
        <div class="container">
          <div class="block-spacer-small"></div>
          <div id="introduction-text-description">
            <p>
              Hyacine is 5☆ Wind-type Head Healer of The Twilight Courtyard in Honkai: Star Rail following the Path of Remembrance.
              Hyacine is a healer character who can summon memosprite Little Ica and increase all allies' max HP.
              When allies' HP decreases, Little Ica instantly restores their HP.
              The more healing Hyacine and Little Ica provide, the higher the DMG Little Ica deals to enemies.
              This guide will help you with her best Relics, Light Cones, teams, synergies, and more!
            </p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* infographic */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Infographic">Infographic</h1>
          </div>
        </div>
        <div class="block-spacer-large"></div>
        <div class="container">
          <div class="infographic">
            <img id="hyacine-infographic" src="/Hyacine-infographic.png"/>
            <div class="block-spacer-small"></div>
            <p>Credits to: KQM</p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* character overview */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Character-Overview">Character Overview</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="grid-container-pro-con">
          <div class="pro">
            <div class="container">
              <div class="small-box">
                <h3 class="small-box-text">Pros</h3>
              </div>
              <ul id="pro-bullet-point">
                <li>Extremely strong AoE damage</li>
                <li>Provide all allies' max HP increase</li>
                <li>Provide teamwide debuff cleansing</li>
                <li>Extremely strong AoE healing</li>
                <li>Very speedy</li>
                <li>My sky can't possibly be this cute</li>
              </ul>
            </div>
          </div>
          <div class="con">
            <div class="container">
              <div class="small-box">
                <h3 class="small-box-text">Cons</h3>
              </div>
              <ul id="con-bullet-point">
                <li>SP-inefficient</li>
                <li>Reliant on Ultimate for max HP buff and to deal damage</li>
                <li>Signature Light Cone provides significant benefits for multiple teams</li>
                <li>Her cuteness will melt your heart</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* playstyle */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Playstyle">Playstyle</h2>
          </div>
        </div>
        <div class="container">
          <div class="block-spacer-small"></div>
          <div id="playstyle-text-description">
            <p>
              Hyacine is a Wind-type healer who following the Path of Remembrance. Her main primary role is to restore allies HP while also dealing damage to enemies. 
              She has abilities that increase the teamwide maximum HP and cleanse debuffs from all allies. Her memosprite Little Ica, deals damage to all enemies based on the Tally of Healing done 
              by both Hyacine and Little Ica in the battle. Hyacine is a highly versatile healer who can fit into any team composition, though she shines brightest when paired with characters who scale with HP.
            </p><br></br>
            <p>
              Hyacine playstyle revolves around summoning Little Ica onto the battlefield. Once Little Ica is summoned, whenever an ally HP decreases, Little Ica will consume their own HP to restore HP to that ally.
            </p><br></br>
            <p>
              When Hyacine activates her Ultimate, she enters the "After Rain" state. In this enhanced state, Little Ica's abilities are significantly enhanced. All single-target healing from Little Ica becomes AoE healing, restoring HP for the entire team instead of just one ally.
              Additionally, while Hyacine is in the "After Rain" state, each time Hyacine takes an action, Little Ica unleashes an memosprite skill that significant deals damage to all enemies. This damage will be based on the Tally of Healing done by Hyacine and Little in the battle.
            </p><br></br>
            <p>
              As a result, Hyacine's playstyle is involves around frequently using her skills and ultimates to maximize healing output to keep all allies alive and turning her healing power into devastating offensive potential.
            </p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* traces */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Traces">Traces</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="block-spacer-small"></div>
        <div class="grid-container-traces">
          <button className={`button ${traceActiveButton === 'basic' ? 'active' : ''}`} onClick={() => setTraceActiveButton('basic')} id="basic-atk">
            <h4>Basic<br></br>ATK</h4>
          </button>
          <button className={`button ${traceActiveButton === 'skill' ? 'active' : ''}`} onClick={() => setTraceActiveButton('skill')} id="skill">
            <h4>Skill</h4>
          </button>
          <button className={`button ${traceActiveButton === 'ultimate' ? 'active' : ''}`} onClick={() => setTraceActiveButton('ultimate')} id="ultimate">
            <h4>Ultimate</h4>
          </button>
          <button className={`button ${traceActiveButton === 'talent' ? 'active' : ''}`} onClick={() => setTraceActiveButton('talent')} id="talent">
            <h4>Talent</h4>
          </button>
          <button className={`button ${traceActiveButton === 'technique' ? 'active' : ''}`} onClick={() => setTraceActiveButton('technique')} id="technique">
            <h4>Technique</h4>
          </button>
          <button className={`button ${traceActiveButton === 'a2' ? 'active' : ''}`} onClick={() => setTraceActiveButton('a2')} id="a2">
            <h4>A2<br></br>Bonus</h4>
          </button>
          <button className={`button ${traceActiveButton === 'a4' ? 'active' : ''}`} onClick={() => setTraceActiveButton('a4')} id="a4">
            <h4>A4<br></br>Bonus</h4>
          </button>
          <button className={`button ${traceActiveButton === 'a6' ? 'active' : ''}`} onClick={() => setTraceActiveButton('a6')} id="a6">
            <h4>A6<br></br>Bonus</h4>
          </button>
        </div>
        <div class="block-spacer-small"></div>

        {/* show the info below from trace actived button */}
        {traceActiveButton && (
        <div className="info-block">
          {traceContentMap[traceActiveButton] || <p>No information found</p>}
        </div> )}
        <div class="container">
          <div id="trace-note-text">
            <i>Note: Trace levels shown are 
              <span class="percentage-number"> 1/10/12 </span>
               (Basic ATK are<span class="percentage-number"> 1/6/7</span>).
            </i>
          </div>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* memosprite trace */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Memosprite-Traces">Memosprite Traces</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="block-spacer-small"></div>
        <div class="grid-container-memo-traces">
          <button className={`button ${memoTraceActiveButton === 'memo_skill' ? 'active' : ''}`} onClick={() => setMemoTraceActiveButton('memo_skill')} id="memo_skill">
            <h4>Memosprite<br></br>Skill</h4>
          </button>
          <button className={`button ${memoTraceActiveButton === 'memo_talent1' ? 'active' : ''}`} onClick={() => setMemoTraceActiveButton('memo_talent1')} id="memo_talent1">
            <h4>Memosprite<br></br>Talent 1</h4>
          </button>
          <button className={`button ${memoTraceActiveButton === 'memo_talent2' ? 'active' : ''}`} onClick={() => setMemoTraceActiveButton('memo_talent2')} id="memo_talent2">
            <h4>Memosprite<br></br>Talent 2</h4>
          </button>
          <button className={`button ${memoTraceActiveButton === 'memo_talent3' ? 'active' : ''}`} onClick={() => setMemoTraceActiveButton('memo_talent3')} id="memo_talent3">
            <h4>Memosprite<br></br>Talent 3</h4>
          </button>
        </div>
        <div class="block-spacer-small"></div>

        {/* show the info below from memosprite trace actived button */}
        {memoTraceActiveButton  && (
        <div className="info-block">
          {memoTraceContentMap[memoTraceActiveButton ] || <p>No information found</p>}
        </div> )}
        <div class="container">
          <div id="trace-note-text">
            <i>Note: Memosprite Trace levels shown are
              <span class="percentage-number"> 1/6/7</span>.
            </i>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* trace priority */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Traces-Priority">Traces Priority</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="trace-priority-box">
          <div class="trace-priority-icon-grid">
            <span></span>
            <img src="/memo_talent.png" width="70" height="70"></img>
            <span>=</span>
            <img src="/Ultimate.png" width="70" height="70"></img>
            <span>&gt;</span>
            <img src="/Skill.png" width="70" height="70"></img>
            <span>≥</span>
            <img src="/memo_skill.png" width="70" height="70"></img>
            <span>=</span>
            <img src="/Talent.png" width="70" height="70"></img>
            <span></span>
            </div>
            <div class="trace-priority-text">
              Memosprite Talent = Ultimate &gt; Skill ≥ Memosprite Skill = Talent
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="trace-priority-text-description">
            <p>most of the time, main source of Hyacine's healing comes from Memosprite Talent, making it her main leveling priority.</p><br></br>
            <p>After that, her own Skill and Ultimate come in, as they can further increase Hyacine's healing, while her Ultimate gives allies a massive max HP increase.</p><br></br>
            <p>And finally, Memosprite Skill and her own Talent as they can increase her own personal damage and should be leveled to maximize the damage she can deals.</p><br></br>
            <p>You can avoid leveling up her Basic ATK since it doesn't do notable damage.</p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* Eidolon */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Eidolons">Eidolons</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="block-spacer-small"></div>
        <div class="grid-container-eidolon">
          <button className={`button ${eidolonActiveButton === 'eidolon1' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon1')} id="eidolon1">
            <h4>Eidolon 1</h4>
          </button>
          <button className={`button ${eidolonActiveButton === 'eidolon2' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon2')} id="eidolon2">
            <h4>Eidolon 2</h4>
          </button>
          <button className={`button ${eidolonActiveButton === 'eidolon3' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon3')} id="eidolon3">
            <h4>Eidolon 3</h4>
          </button>
          <button className={`button ${eidolonActiveButton === 'eidolon4' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon4')} id="eidolon4">
            <h4>Eidolon 4</h4>
          </button>
          <button className={`button ${eidolonActiveButton === 'eidolon5' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon5')} id="eidolon5">
            <h4>Eidolon 5</h4>
          </button>
          <button className={`button ${eidolonActiveButton === 'eidolon6' ? 'active' : ''}`} onClick={() => setEidolonActiveButton('eidolon6')} id="eidolon6">
            <h4>Eidolon 6</h4>
          </button>
        </div>
        <div class="block-spacer-small"></div>

        {/* show eidolon info block */}
        {eidolonActiveButton  && (
        <div className="info-block">
          {eidolonContentMap[eidolonActiveButton ] || <p>No information found</p>}
        </div> )}
        <div class="block-spacer-large"></div>
        
        {/* how to build Hyacine */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Builds">Builds</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* Support Build */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Support-Builds">Support Builds</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* support build light cone */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Light Cones [Support]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/hyacine_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Long May Rainbows Adorn the Sky</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine's signature and Best-in-Slot Light Cone. Offer high base HP, high SPD, HP drain, Addional DMG when Little Ica attack, and increase DMG Taken by all enemies.</p><br></br>
                <p>The amount of SPD given by this Light Cone and HP drain, make it an incredibly powerful option that performs better than the others on this list.</p><br></br>
                <p>The DMG Taken by all enemies provided by this Light Cone also affect an entire team.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/aglaea_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Time Woven Into Gold</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Aglaea's signature and second best Light Cone option for Hyacine. Provide high base SPD and CRIT DMG for both Hyacine and Little Ica.</p><br></br>
                <p>Do note that Hyacine can't use ATK that has been provided by this Light Cone but considering the amount of SPD and CRIT DMG given, this still make it a solid Light Cone option for Hyacine.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/free_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Memory's Curtain Never Falls</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Best free 5★ Light Cone option for Hyacine from Herta's Store, providing a straightforward SPD for wearer and DMG dealt by all allies.</p><br></br>
                <p>Worth buying especially if can't afford Hyacine's signature Light Cone.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/the-story-next-page.png" width="175"></img>
                <br></br>
                <span><strong><i>The Story's Next Page</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>The best 4-star Light Cone from the Battle Pass offers Max HP and Outgoing Healing, both of which fully benefit Hyacine and Little Ica.</p><br></br>
                <p>However, since it doesn’t provide any SPD boost, Hyacine may struggle to reach the 200 SPD threshold, which causes its performance to fall behind <em>Memory’s Curtain Never Falls</em>.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/Icon_HP.webp" width="150"></img>
                <br></br>
                <span><p><strong>Hight Base HP Light Cones</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Light Cones with high Base HP are better stat sticks and perform better than other 4★ or 3★ options, including Light Cones from the Path of Remembrance.</p><br></br>
                <p>Examples include <em>Flame of Blood, Blaze My Path</em> (Mydei’s signature LC)/<em>Time Waits for No One</em> (Bailu’s signature LC).</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* support build relics */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Relics [Support]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* support build relic set */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Relic Sets</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/warrior_goddess_relic.png" width="120"></img>
                <br></br>
                <span><p><strong>4-PC Warrior Goddess of Sun and Thunder</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine’s best Relic Set, fully benefiting her and Little Ica.</p><br></br>
                <p>The 4-PC Set Effect require wearer to provide healing on ally targets. Thanks to her Technique, Hyacine can activate the 4-PC Set Effect at the start of the battle.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img class="combine-2PC" src="/messenger_relic.png" width="70"></img>
                <img class="combine-2PC" src="/sacerdos_relic.png" width="70"></img>
                <img class="combine-2PC" src="/passerby_relic.png" width="70"></img>
                <img class="combine-2PC" src="/longevous_relic.png" width="70"></img>
                <br></br>
                <span><p><strong>2-PC combinations</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Other 4-PC combinations generally do not benefit Hyacine.</p><br></br>
                <p>This means that going for 2-PC combinations for the stat bonuses they provide will perform better.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* support planar ornaments */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Planar Ornaments</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/grove_planar.png" width="120"></img>
                <br></br>
                <span><p><strong>Giant Tree of Rapt Brooding</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine’s best Planar Ornaments, this Planar was practically tailor-made for Hyacine given how easily she can meet its SPD requirement and the fact that it fully buffs her and Little Ica.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img class="relic" src="/aidonia_planar.png" width="120"></img>
                <br></br>
                <span><p><strong>Bone Collection's Serene Demesne</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Provide max HP and CRIT DMG for Hyacine but require wearer to have at least 5000 HP. Thank to Hyacine's HP-scaling, she can easily reach its requirement.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/brokenkeel_planar.png" width="120"></img>
                <br></br>
                <span><p><strong>Broken Keel</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Sacrifices HP and SPD to grant all allies a 10% CRIT DMG boost. Requires the wearer to have at least 30% Effect RES</p><br></br>
                <p>A condition made easier to meet thanks to Hyacine's A4 Bonus Ability, which provides 50% Effect RES during battle.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* support relic stats */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Stats [Support]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/body_piece.png" width="50"></img>
                <span><p><storng>Body</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/boot_piece.png" width="50"></img>
                <span><p><storng>Boots</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/orb_piece.png" width="50"></img>
                <span><p><storng>Sphere</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/rope_piece.png" width="50"></img>
                <span><p><storng>Link Rope</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
            </tr>
            <tr>
              <th class="stat-piece-recommend">
                <span style={{fontWeight: 'normal'}}><p>Outgoing Healing &gt; HP</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>SPD</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>HP</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>Energy Regeneration</p></span>
              </th>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* support recommend stats */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Recommend Stats</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="stats-recommend-box">
            <div class="stats-recommend-box-text">
              E0 <br></br>
              HP: 5000<br></br>
              SPD: 200
            </div>
            <div class="stats-recommend-box-text">
              E1 <br></br>
              HP: 4700<br></br>
              SPD: 210
            </div>
            <div class="stats-recommend-box-text">
              E2 <br></br>
              HP: 4700<br></br>
              SPD: 210
            </div>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* support relic substats */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Substats</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="substats-recommend-box">
            <div class="substats-recommend-box-text">
              SPD &gt; HP% &gt; CRIT DMG &gt; Effect RES
            </div>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div id="substat-text-description">
            <p>Hyacine has 100% CRIT Rate thanks to her A2 Bonus Ability. Therefore, Hyacine should be built with a focus on SPD, HP, and CRIT DMG if you want to maximize her personal damage.</p><br></br>
            <p>Since Hyacine can convert excess SPD into an Outgoing Healing Boost, she benefits greatly from high SPD, but make sure to build HP too, since Hyacine's healing scales with it.</p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* Hypercarry Build */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Hypercarry-Builds">Hypercarry Builds</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* Hypercarry build light cone */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Light Cones [Hypercarry]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/hyacine_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Long May Rainbows Adorn the Sky</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine's signature and Best-in-Slot Light Cone. Offer high base HP, high SPD, HP drain, Addional DMG when Little Ica attack, and increase DMG Taken by all enemies.</p><br></br>
                <p>The amount of SPD given by this Light Cone and HP drain, make it an incredibly powerful option that performs better than the others on this list.</p><br></br>
                <p>The DMG Taken by all enemies provided by this Light Cone also affect an entire team.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/aglaea_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Time Woven Into Gold</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Aglaea's signature and second best Light Cone option for Hyacine. Provide high base SPD and CRIT DMG for both Hyacine and Little Ica.</p><br></br>
                <p>Do note that Hyacine can't use ATK that has been provided by this Light Cone but considering the amount of SPD and CRIT DMG given, this still make it a solid Light Cone option for Hyacine.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/castorice_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Make Farewells More Beautiful</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Castorice’s signature and third best Light Cone option for Hyacine. Offers high Base HP, an HP Boost, DEF Ignore, and an Action Advance when Little Ica leaves the field.</p><br></br>
                <p>The HP provided by this Light Cone already makes it a good option, and the DEF ignore on top makes it an incredibly powerful option.</p><br></br>
                <p>But without SPD from the Light Cone, reaching 200 SPD becomes difficult for Hyacine, lowering her overall healing performance.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/free_light_cone.webp" width="175"></img>
                <br></br>
                <span><strong><i>Memory's Curtain Never Falls</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>Best free 5★ Light Cone option for Hyacine from Herta's Store, providing a straightforward SPD for wearer and DMG dealt by all allies.</p><br></br>
                <p>Worth buying especially if can't afford Hyacine's signature Light Cone.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/the-story-next-page.png" width="175"></img>
                <br></br>
                <span><strong><i>The Story's Next Page</i></strong></span>
              </th>
              <td class="table-info-text">
                <p>The best 4-star Light Cone from the Battle Pass offers Max HP and Outgoing Healing, both of which fully benefit Hyacine and Little Ica.</p><br></br>
                <p>However, since it doesn’t provide any SPD boost, Hyacine may struggle to reach the 200 SPD threshold, which causes its performance to fall behind <em>Memory’s Curtain Never Falls</em>.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/Icon_HP.webp" width="150"></img>
                <br></br>
                <span><p><strong>Hight Base HP Light Cones</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Light Cones with high Base HP are better stat sticks and perform better than other 4★ or 3★ options, including Light Cones from the Path of Remembrance.</p><br></br>
                <p>Examples include <em>Flame of Blood, Blaze My Path</em> (Mydei’s signature LC)/<em>Time Waits for No One</em> (Bailu’s signature LC).</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* Hypercarry build relics */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Relics [Hypercarry]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* Hypercarry build relic set */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Relic Sets</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/warrior_goddess_relic.png" width="120"></img>
                <br></br>
                <span><p><strong>4-PC Warrior Goddess of Sun and Thunder</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine’s best Relic Set, fully benefiting her and Little Ica.</p><br></br>
                <p>The 4-PC Set Effect require wearer to provide healing on ally targets. Thanks to her Technique, Hyacine can activate the 4-PC Set Effect at the start of the battle.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/hero_relic.png" width="120"></img>
                <br></br>
                <span><p><strong>4-PC Hero of Triumphant Song</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>An alternative relic option for Hyacine that offers a solid SPD boost along with a significant increase in CRIT DMG for both Hyacine and Little Ica.</p><br></br>
                <p>Thanks to its 2-turn duration and reset whenever Little Ica attacks, keeping the effect active is relatively easy.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img class="combine-2PC" src="/messenger_relic.png" width="70"></img>
                <img class="combine-2PC" src="/sacerdos_relic.png" width="70"></img>
                <img class="combine-2PC" src="/passerby_relic.png" width="70"></img>
                <img class="combine-2PC" src="/longevous_relic.png" width="70"></img>
                <br></br>
                <span><p><strong>2-PC combinations</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Other 4-PC combinations generally do not benefit Hyacine.</p><br></br>
                <p>This means that going for 2-PC combinations for the stat bonuses they provide will perform better.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* Hypercarry planar ornaments */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Planar Ornaments</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="relic" src="/grove_planar.png" width="120"></img>
                <br></br>
                <span><p><strong>Giant Tree of Rapt Brooding</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine’s best Planar Ornaments, this Planar was practically tailor-made for Hyacine given how easily she can meet its SPD requirement and the fact that it fully buffs her and Little Ica.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img class="relic" src="/aidonia_planar.png" width="120"></img>
                <br></br>
                <span><p><strong>Bone Collection's Serene Demesne</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Provide max HP and CRIT DMG for Hyacine but require wearer to have at least 5000 HP. Thank to Hyacine's HP-scaling, she can easily reach its requirement.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* Hypercarry relic stats */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Stats [Hypercarry]</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/body_piece.png" width="50"></img>
                <span><p><storng>Body</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/boot_piece.png" width="50"></img>
                <span><p><storng>Boots</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/orb_piece.png" width="50"></img>
                <span><p><storng>Sphere</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
              <th style={{width: '25%'}}>
                <img class="relic-part-image" src="/rope_piece.png" width="50"></img>
                <span><p><storng>Link Rope</storng></p></span>
                <div class="block-spacer-small"></div>
              </th>
            </tr>
            <tr>
              <th class="stat-piece-recommend">
                <span style={{fontWeight: 'normal'}}><p>Outgoing Healing &gt; CRIT DMG</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>SPD</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>HP &gt; Wind DMG</p></span>
              </th>
              <th>
                <span style={{fontWeight: 'normal'}}><p>Energy Regeneration ≥ HP</p></span>
              </th>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* hypercarry recommend stats */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Recommend Stats</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="stats-recommend-box">
            <div class="stats-recommend-box-text">
              E0<br></br>
              HP: 4700<br></br>
              SPD: 200<br></br>
              CRIT DMG: 100%
            </div>
            <div class="stats-recommend-box-text">
              E1-2<br></br>
              HP: 4500<br></br>
              SPD: 210<br></br>
              CRIT DMG: 100%
            </div>
            <div class="stats-recommend-box-text">
              E4+<br></br>
              HP: 4500<br></br>
              SPD: 230<br></br>
              CRIT DMG: 50%
            </div>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* Hypercarry relic substats */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Substats</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="substats-recommend-box">
            <div class="substats-recommend-box-text">
              SPD &gt; HP% ≥ CRIT DMG &gt; Effect RES
            </div>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div id="substat-text-description">
            <p>Hyacine has 100% CRIT Rate thanks to her A2 Bonus Ability. Therefore, Hyacine should be built with a focus on SPD, HP, and CRIT DMG to maximize her healing and personal damage.</p><br></br>
            <p>Since Hyacine can convert excess SPD into an Outgoing Healing Boost, she benefits greatly from high SPD, but make sure to build HP too, since Hyacine's healing scales with it.</p><br></br>
            <p>An HP Link Rope becomes a viable option when pairing Hyacine with Sunday. Thanks to Sunday’s Ultimate, Hyacine can maintain 100% Ultimate uptime even without using an Energy Regen Rope.</p>
          </div>
        </div>
        <div class="block-spacer-large"></div>

        {/* E1 or S1 */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="E1-or-S1?">E1 or S1?</h1>
          </div>
        </div>
        <Accordion title="E1 Description">
          <div class="E1-or-S1-box-grid">
            <div class="image-and-name">
              <img src="/E1_art.png" width="100%"/>
              <p><em><strong>Cradle the Candle of Night</strong></em></p>
            </div>
            <div class="image-and-name-description">
              <p>
                While Hyacine is in the "After Rain" state, all ally targets additionally increase their Max HP by
                <span class="percentage-number"> 50%</span>
                , and after using an attack, immediately restore their HP by an amount equal to
                <span class="percentage-number"> 8% </span>
                of Hyacine's Max HP.
              </p>
            </div>
          </div>
        </Accordion>
        <Accordion title="S1 Description">
          <div class="E1-or-S1-box-grid">
            <div class="image-and-name">
              <img src="/hyacine_light_cone.webp" width="100%"/>
              <p><em><strong>Long May Rainbows Adorn the Sky</strong></em></p>
            </div>
            <div class="image-and-name-description">
              <p>
                Increases the wearer's SPD by
                <span class="percentage-number"> 18%</span>.
                When the wearer uses Basic ATK, Skill, or Ultimate, consumes all allies' HP equal to
                <span class="percentage-number"> 1% </span>
                of their current HP and additionally deals 1 instance of Additional DMG of the wearer's memosprite Type equal to
                <span class="percentage-number"> 250% </span>
                of the total consumed HP to the attacked target after the next attack launched by the wearer's memosprite. The total HP consumed is then reset. When the wearer's memosprite uses Memosprite Skill, increases the DMG taken by all enemies by
                <span class="percentage-number"> 18% </span>
                for 2 turn(s). The same types of effects cannot stack.
              </p>
            </div>
          </div>
        </Accordion>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="E1-or-S1-description">
            <p>Hyacine’s 1st Eidolon is incredibly powerful, granting a massive Max HP boost to the entire team. This increase benefits both HP-scaling DPS characters and Hyacine herself, effectively translating to a 30% damage boost for DPS units and a significant increase to Hyacine’s own damage.</p><br></br>
            <p>Her Signature Light Cone, however, offer many benefits. Her S1 has high Base HP, significant SPD, HP drain, Additional DMG, and increase DMG Taken by all enemies. When combine with the facts that no other Remembrance Light Cone currently provides HP drain, this makes her Light Cone the solid vertical investment option</p><br></br>
            <p>In conclusion, Hyacine’s E1 may offer greater benefits when paired with HP-scaling characters like Castorice. However, her Signature Light Cone provides more well-rounded utility, enhancing Hyacine herself and offering valuable team-wide support, even for teams that aren’t focused on HP scaling. The debuff and HP-drain effects from her Signature Light Cone also work well with Acheron and Blade.</p>
          </div>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* notable synergies */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Notable-Synergies">Notable Synergies</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* damage dealers */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Damage-Dealers">Damage Dealers</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/castorice.webp" width="150"></img>
                <br></br>
                <span><p><strong>Castorice</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>The most important part of Castorice’s kit is to gain more "Newbud" for summoning Netherwing, which she can gain it with teamwide HP reduction and healing</p><br></br>
                <p>This makes Hyacine the best partner for her. She has a memosprite to drain HP from, strong and frequent teamwide healing, and a rare max HP buff for the entire team</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/mydei.webp" width="150"></img>
                <br></br>
                <span><p><strong>Mydei</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Mydei has a Charge mechanic where he gains 1 point of Charge for every 1% HP he loses. His Skill consumes his own HP to build Charge, which mean he wants to run alongside a healer who capable of consistently restoring his HP.</p><br></br>
                <p>Although Hyacine doesn't offer strong single-target healing like Luocha, the Max HP boost from her Ultimate still makes her a solid healer option for Mydei.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/therta.webp" width="150"></img>
                <br></br>
                <span><p><strong>The Herta</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Herta relies on energy generated from allies attacking enemies. This makes Hyacine, with her Memosprite’s frequent attacks, a solid sustainer choice for Herta.</p><br></br>
                <p>On top of That, Hyacine also offer her own personal damage to help The Herta defeat enemies more efficiently.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/acheron.webp" width="150"></img>
                <br></br>
                <span><p><strong>Acheron</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine, when equipped with her Signature Light Cone, consistently applies debuffs to all enemies helping Acheron build "Slashed Dream" more efficiently for her Ultimate.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/blade.webp" width="150"></img>
                <br></br>
                <span><p><strong>Blade</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Blade relies on losing HP to build stacks for his Follow-Up attacks, making Hyacine with her Signature Light Cone a Best-in-Slot healer.</p><br></br>
                <p>In addition to providing frequent HP drain, her Ultimate also boosts Max HP, further enhancing Blade’s damage potential.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/feixiao.webp" width="150"></img>
                <br></br>
                <span><p><strong>Feixiao</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Feixiao benefits from frequent ally attacks to build "Flying Aureus" for her Ultimate, making Hyacine a strong healer option.</p><br></br>
                <p>With her Memosprite providing consistent attacks and her solid personal damage, Hyacine contributes both to stack generation and overall team DPS.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/jingliu.webp" width="150"></img>
                <br></br>
                <span><p><strong>Jingliu</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Jingliu received a major buffs to her kits in Version 3.4, shifting her scaling from ATK to HP. This change instantly elevates Hyacine with her teamwide max HP boost to a Best-in-Slot healer option for Jingliu.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* damage amplifier */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Damage-Amplifiers">Damage Amplifiers</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/rmc.webp" width="150"></img>
                <br></br>
                <span><p><strong>Trailblazer (Remembrance)</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Hyacine's best partner, provides 100% Action Advances, massive True DMG, and CRIT DMG buffs to Hyacine and Little Ica.</p><br></br>
                <p>On top of that, they come with their own memosprite, effectively adding another unit for Hyacine to heal, which in turn increases the damage output provided by Little Ica.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/sunday.webp" width="150"></img>
                <br></br>
                <span><p><strong>Sunday</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Sunday provides powerful team buffs including 100% Action Advance, bonus DMG%, and increased CRIT DMG.</p><br></br>
                <p>On top of that, he also helps generate additional energy for Hyacine, allowing her to run an HP rope instead of relying on Energy Regeneration.</p><br></br>
                <p>Although Sunday is already a powerful buffer for Hyacine, his E1 further enhances his support by granting Little Ica a 40% DEF Ignore buff, this is a significant boost to Hyacine’s overall DPS.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img src="/tribbie.webp" width="150"></img>
                <br></br>
                <span><p><strong>Tribbie</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Tribbie is undoubtedly one of the strongest buffers for Hyacine. She provides incredibly powerful RES-PEN and increased DMG Taken for all enemies, while also contributing impressive personal damage.</p><br></br>
                <p>E1 Tribbie is also a significant upgrade for Hyacine. It adds bonus True DMG whenever an ally attacks. If the attack hits 5 enemies, the extra damage is redirected to the enemy with the highest HP, greatly boosting Hyacine's single-target damage potential.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/ruanmei.webp" width="150"></img>
                <br></br>
                <span><p><strong>Ruan Mei</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>An old unit yet still one of solid option for many team. Ruan Mei provide massive DMG% and RES-PEN.</p><br></br>
                <p>Ruan Mei is also available through the 'Stellar Convergence' shop, allowing many players who already own her to unlock her E1 which grants a powerful DEF-Ignore buff to all allies.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/pela.webp" width="150"></img>
                <br></br>
                <span><p><strong>Pela</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Pela is still one of the strongest 4★ buffers, thanks to her powerful Ultimate, which applies a significant DEF reduction to all enemies on the battle.</p><br></br>
                <p>However, aside from the DEF reduction provided by her Ultimate, Pela doesn't offers any benefit to Hyacine.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/jiaoqiu.webp" width="150"></img>
                <br></br>
                <span><p><strong>Jiaoqiu</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Jiaoqiu is also a strong buffer for Hyacine, offering a significant DMG Taken increase to all enemies through his 'Ashen Roast'.</p><br></br>
                <p>Aside from DMG Taken increase to all enemies, he doesn't offers any benefit to Hyacine.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/cipher.webp" width="150"></img>
                <br></br>
                <span><p><strong>Cipher</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Sub-DPS character who also offer DMG Taken increase and DEF reduction, making Cipher one of a solid choice for Hyacine.</p><br></br>
                <p>In addition to providing DMG Taken increase and DEF reduction, Cipher also contributes with high personal damage, which increase overall team dps.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img src="/Silver_Wolf.webp" width="150"></img>
                <br></br>
                <span><p><strong>Silver Wolf</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>After receiving a buff in Version 3.4, Silver Wolf gains the ability to apply DEF reduction to all enemies and now prioritizes implanting elemental weakness based on the element of the first ally in the team, significantly improving her consistency and team synergy.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* notable anti-synergies */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Notable-Anti-Synergies">Notable Anti-Synergies</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* sustainer */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Sustainers">Sustainers</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <table class="table-info-block">
            <tr>
              <th class="table-info-image" style={{width: '25%'}}>
                <img class="sustainer-icon" src="/Icon_Preservation.webp" width="70"></img>
                <br></br>
                <span><p><strong>Shielders</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Since Hyacine is one of the strongest sustainers in the entire game, there’s no need to run a second sustainer in the team.</p>
              </td>
            </tr>
            <tr>
              <th class="table-info-image">
                <img class="sustainer-icon" src="/Icon_Abundance.webp" width="70"></img>
                <br></br>
                <span><p><strong>Healers</strong></p></span>
              </th>
              <td class="table-info-text">
                <p>Since Hyacine is one of the strongest sustainers in the entire game, there’s no need to run a second sustainer in the team.</p>
              </td>
            </tr>
          </table>
        </div>
        <div class="block-spacer-large"></div>

        {/* why remembrance trailblazer is the best */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Remembrance-Trailblazer">Is Remembrance Trailblazer The Best Ally For Hypercarry Hyacine?</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="rmc-and-hyacine">
            <img src="/hyacine.webp" width="200"></img>
            <img src="/rmc.webp" width="200"></img>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="rmc-and-hyacine-description">
            <p>Short answer, yes. the Remembrace Trailblazer is unarguably the best ally for Hyacine as they provide True DMG and CRIT DMG buffs, which synergize very well with Hyacine and Little Ica.</p><br></br>
            <p>On top of that, they come with their own memosprite, effectively adding another unit for Hyacine to heal. Additionally, the Remembrance Trailblazer can generating more SP for Hyacine since they rarely need to use their Skill.</p>
          </div>
        </div>
         <div class="block-spacer-large"></div>

         {/* team */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Teams">Teams</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* healer flex */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Healer-Flex">Healer Flex</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* hyacine solo sustain */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Hyacine Solo Sustain</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-hyacine-solo.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Flex - Flex - Flex</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>Although Hyacine has some SP management issues, as she relies on Skill Points to maximize her healing, she remains flexible enough to serve as a solo sustainer in a variety of team compositions.</p>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* example team */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Example Teams</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* castorice hypercarry team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Castorice Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-castorice.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Castorice - Tribbie - Trailblazer (Remembrance) - Hyacine</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <p>The premium Castorice team, taking advantage of the damage amplification abilities of Trailblazer (Remembrance), Tribbie and Hyacine to maximize the damage Castorice and Netherwing can do.</p><br></br>
        <p>Hyacine rounds out the team as a strong sustain option who brings yet another memosprite, The team’s high SP efficiency also allows Hyacine to always use her Skill, improving her Ultimate uptime, personal damage and Newbud generation even further!</p>
        <div class="block-spacer-large"></div>

        {/* mydei hypercarry team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Mydei Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-mydei.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Mydei - Tribbie - Sunday - Hyacine</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <p>The premium Mydei team, taking advantage of the damage amplification abilities and Action Advace of Sunday, Tribbie and Hyacine to maximize Mydei's damage.</p><br></br>
        <p>The team’s high SP efficiency also allows Hyacine to always use her Skill, improving her Ultimate uptime and personal damage.</p><br></br>
        <p>However, Hyacine doesn't offer strong single-target healing like Luocha, but the Max HP boost from her Ultimate still makes her a solid healer option for Mydei.</p>
        <div class="block-spacer-large"></div>

        {/* the herta team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">The Herta Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-therta.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>The Herta - Anaxa - Tribbie - Hyacine</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <p>The premium The Herta team, she requires at least two Erudition characters to activate her A4 Bonus Ability and relies on energy generated from allies attacking enemies. Anaxa is the best character for this role. His Skill can hit all enemies and launches twice every turn</p><br></br>
        <p>The Herta has tremendous self buffs in her kit which make other similar buffs less effective. Tribbie's RES-PEN and DMG Taken don't suffer from this downside.</p><br></br>
        <p>While Hyacine’s Max HP buff doesn’t directly benefit Herta, her frequent attacks from the memosprite and strong personal damage still make her one of the best sustainers for The Herta team.</p>
        <div class="block-spacer-large"></div>

        {/* acheron team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Acheron Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-acheron.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Acheron - Jiaoqiu - Cipher - Hyacine</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <p>The premium E0 Acheron team, Jiaoqiu is Acheron’s premier amplifier and Slashed Dream points generator, capable of applying debuffs during enemy actions while also fulfilling Acheron’s Nihility teammate requirements alongside with Cipher with a debuffing Light Cone she can inflict more debuffs than usual thanks to her Follow-up ATK.</p><br></br>
        <p>Hyacine with Signature Light Cone greatly benefits Acheron by frequently applying DMG Taken to all enemies each time Little Ica attacks.</p>
        <div class="block-spacer-large"></div>

        {/* blade hypercaarry team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Blade Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-blade.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Blade - Tribbie - Sunday - Hyacine</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <p>Blade is making a comeback after Hyacine’s release and the buffs he received in version 3.4. He takes full advantage of Sunday's damage amplification and Action Advance, while Tribbie provides with powerful RES-PEN and increased DMG Taken, creating a highly synergistic team.</p><br></br>
        <p>Blade also greatly benefits from Hyacine’s Max HP buff, which boost his damage. Additionally, the consistent HP drain from her Signature Light Cone helps him quickly accumulate stacks for his Follow-Up attacks.</p>
        <div class="block-spacer-large"></div>

        {/* hypercarry hyacine */}
        <div class="container">
          <div class="medium-box">
            <h2 class="medium-box-text" id="Hypercarry-Hyacine">Hypercarry Hyacine</h2>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* hypercarry hyacine flex */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Hyacine With Flex Amplifiers</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-hyacine-solo.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Amplifier - Amplifier - Amplifier</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>Since Hyacine serves as the team’s primary sustainer, there’s no need to run a second one, freeing up the remaining three slots for damage amplifiers instead.</p>
        </div>
        <div class="block-spacer-large"></div>

        {/* example hypercarry team */}
        <div class="container">
          <div class="small-box">
            <h3 class="small-box-text">Example Teams</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>

        {/* best hyacine hypercarry team */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">The Best Hyacine Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-hyacine-best-team.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Tribbie - Trailblazer (Remembrance) - Sunday</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>Tribbie provides RES-PEN and increased DMG Taken, Remembrance Trailblazer contributes True DMG and CRIT DMG, while Sunday offers DMG% and CRIT DMG. Each of them offers a different type of buff, ensuring that Hyacine’s stats isn’t oversaturated by one buff.</p><br></br>
          <p>Sunday and the Remembrance Trailblazer also provide 100% Action Advance to Hyacine, allowing her to take turns more frequently, which translates into more healing, more damage, and overall increased DPS.</p>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* second best hyacine hypercarry */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Second Best Hyacine Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-second-best.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Tribbie - Trailblazer (Remembrance) - Ruan Mei</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>While Ruan Mei offers strong DMG% and RES-PEN buffs to Hyacine, her lack of Action Advance, combined with the fact that Hyacine already have self DMG%, results in slightly lower overall DPS compared to what Sunday provides.</p><br></br>
          <p>However, this changes in the case of E1 Ruan Mei. Her DEF-Ignore buff provides a significant DPS boost. Especially valuable for Hyacine, who lacks any DEF-Ignore. As a result, E1 Ruan Mei can slightly outperform an E0S1 Sunday in overall team synergy and damage output.</p>
        </div>
        <div class="block-spacer-large"></div>

        {/* thrid best hyacine hypercarry */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">Third Best Hyacine Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-third-best.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Ruan Mei - Trailblazer (Remembrance) - Sunday</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>A hypercarry Hyacine team without Tribbie may stack high amounts of DMG% and CRIT DMG, but it lacks important buffs like RES-PEN and increased DMG Taken. Tribbie, especially with her Signature Light Cone, not only provides those buffs but also adds a significant amount of CRIT DMG, making teams that include her perform noticeably better.</p>
        </div>
        <div class="block-spacer-large"></div>

        {/* F2P hyacine hypercarry */}
        <div class="container">
          <div class="very-small-box">
            <h3 class="very-small-box-text">F2P Hyacine Hypercarry Team</h3>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <img class="team-image" src="/team-image-box-F2P.png"></img>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p class="team-composition"><strong>Hyacine - Ruan Mei - Trailblazer (Remembrance) - Pela</strong></p>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <p>A strong F2P-friendly hypercarry Hyacine team can be built using Pela and the Remembrance Trailblazer, both of whom are free characters. Ruan Mei is also available for free through the Stellar Convergence shop, making this setup highly accessible while still offering excellent synergy.</p>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* credits */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Credits">Credits</h1>
          </div>
        </div>
        <div class="block-spacer-small"></div>
        <div class="container">
          <div class="credit-grid">
            <div class="credit-role">
              Authors
            </div>
            <div class="credit-role">
              Editors
            </div>
            <div class="credit-role">
              Publisher
            </div>
            <div class="credit-name">
              <br></br>TeeNoDie
            </div>
            <div class="credit-name">
              <br></br>TeeNoDie
            </div>
            <div class="credit-name">
              <br></br>TeeNoDie
            </div>
            <div class="credit-role">
              <div class="block-spacer-large"></div>UI and Design
            </div>
            <div class="credit-role">
              <div class="block-spacer-large"></div>Images
            </div>
            <div class="credit-role">
              <div class="block-spacer-large"></div>Information
            </div>
            <div class="credit-name">
              <br></br>KQM
            </div>
            <div class="credit-name">
              <br></br>HomDGCat Wiki<br></br>
              <br></br>Honey Hunter World
            </div>
            <div class="credit-name">
              <br></br>HomDGCat Wiki<br></br>
              <br></br>Prydwen<br></br>
              <br></br>KQM
            </div>
          </div>
        </div>
        <div class="block-spacer-large"></div>
        
        {/* change log */}
        <div class="container">
          <div class="large-box">
            <h1 class="large-box-text" id="Changelog">Changelog</h1>
          </div>
        </div>
        <div class="container">
          <ul class="change-log">
            <li>25 June 2025 – Published for v3.4</li>
            <li>13 July 2025 – Add Silver Wolf and The Story's Next Page</li>
          </ul>
        </div>
        <div class="block-spacer-large"></div>
        <div class="block-spacer-large"></div>
        <div class="container">
          <div class="footer">
            <p>Hyacine Guide • Built by <a href="https://github.com/AlongkornJuthathat">TeeNoDie</a></p>
            <p>Website Feedback on Discord <a href="https://discord.com/users/520916442162528256">Click Here</a></p>
            <p>© All rights reserved by Hoyoverse. Other properties belong to their respective owners.</p>
          </div>
        </div>
        
      </div>

      <div class="right-side-page">
      </div>
    </div>
    </>
  );
}

export default App
