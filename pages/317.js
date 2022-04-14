import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../pages/tabStyles.js"
import { CopyBlock, dracula } from "react-code-blocks";
import NodeFetch from 'node-fetch' 

const _317 = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabItems = tab === "Items" || tab == null
  const isTabObjects = tab === "Objects"
  const isTabVarbits = tab === "Varbits"
  const isTabAreas = tab === "Areas"
  const isTabFloors = tab === "Floors"
  const isTabNpc = tab === "Npc"
  const isTabSeq = tab === "Seq"
  const isTabAnimations = tab === "Animations"
  const isTabModelHeader = tab === "Model Header"

  var revs = {
    "204": "https://repo.osrsquery.com/204/",
  }


  return (
    <>
      <div class="container">


        <div className="content-container-block">
          <h2 className="section-heading center">oldschool runescape data 317</h2>
          <p className="section-heading-paragraph">Please use the tools below to download any Oldschool RuneScape data in 317 format. Select the Revision that you would like to download.</p>
          <div className="vertical-flex">
            <div>
              <form id="search-sprite-id" data-name="search-sprite-id">
                <div className="table-form-filters">
                  <div className="table-form-filters--left">
                    <Link href="https://repo.osrsquery.com/204/317.zip"><a className="quick-link-btn-purple w-button">Download</a></Link>
                  </div>

                  <div className="table-form-filters--right">
                    <div className="input-group" id="locality-dropdown"><label htmlFor="number-of-entries-2" className="field-label">Select Revision:  </label><select id="number-of-entries-2" name="number-of-entries-2" data-name="Number Of Entries 2" class="select-field w-select">
                      {Object.keys(revs).map(element => <option key={element} value={revs[element]}>{element}</option>)}
                    </select></div>

                  </div>

                </div>
              </form>
            </div>

            <TabContainer>
              <TabHead>
                <Tab selected={isTabItems}>
                  <Link href={{ pathname: "/317", query: { tab: "Items" } }}>
                    <a>Items</a>
                  </Link>
                </Tab>
                <Tab selected={isTabObjects}>
                  <Link href={{ pathname: "/317", query: { tab: "Objects" } }}>
                    <a>Objects</a>
                  </Link>
                </Tab>
                <Tab selected={isTabVarbits}>
                  <Link href={{ pathname: "/317", query: { tab: "Varbits" } }}>
                    <a>Varbits</a>
                  </Link>
                </Tab>
                <Tab selected={isTabAreas}>
                  <Link href={{ pathname: "/317", query: { tab: "Areas" } }}>
                    <a>Areas</a>
                  </Link>
                </Tab>
                <Tab selected={isTabFloors}>
                  <Link href={{ pathname: "/317", query: { tab: "Floors" } }}>
                    <a>Floors</a>
                  </Link>
                </Tab>
                <Tab selected={isTabNpc}>
                  <Link href={{ pathname: "/317", query: { tab: "Npc" } }}>
                    <a>Npc</a>
                  </Link>
                </Tab>
                <Tab selected={isTabSeq}>
                  <Link href={{ pathname: "/317", query: { tab: "Seq" } }}>
                    <a>Seq</a>
                  </Link>
                </Tab>
                <Tab selected={isTabAnimations}>
                  <Link href={{ pathname: "/317", query: { tab: "Animations" } }}>
                    <a>Animations</a>
                  </Link>
                </Tab>
                <Tab selected={isTabModelHeader}>
                  <Link href={{ pathname: "/317", query: { tab: "Model Header" } }}>
                    <a>Model Header</a>
                  </Link>
                </Tab>
              </TabHead>
              <TabBody>
                {isTabItems && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void decode(Buffer buffer) {
                      while (true) {
                        int opcode = buffer.readUnsignedByte();
                        if (opcode == 0)
                          return;
                        if (opcode == 1)
                          inventory_model = buffer.readUShort();
                        else if (opcode == 2)
                          name = buffer.readStrings();
                        else if (opcode == 3)
                          description = buffer.readStrings();
                        else if (opcode == 4)
                          zoom2d = buffer.readUShort();
                        else if (opcode == 5)
                          xan2d = buffer.readUShort();
                        else if (opcode == 6)
                          yan2d = buffer.readUShort();
                        else if (opcode == 7) {
                          xOffset2d = buffer.readUShort();
                          if (xOffset2d > 32767)
                            xOffset2d -= 0x10000;
                        } else if (opcode == 8) {
                          yOffset2d = buffer.readUShort();
                          if (yOffset2d > 32767)
                            yOffset2d -= 0x10000;
                        } else if (opcode == 11)
                          stackable = true;
                        else if (opcode == 12)
                          value = buffer.readInt();
                        else if (opcode == 16)
                          membership_required = true;
                        else if (opcode == 23) {
                          male_equip_main = buffer.readUShort();
                          male_equip_translate_y = buffer.readSignedByte();
                        } else if (opcode == 24)
                          male_equip_attachment = buffer.readUShort();
                        else if (opcode == 25) {
                          female_equip_main = buffer.readUShort();
                          female_equip_attachment = buffer.readSignedByte();
                        } else if (opcode == 26)
                          equipped_model_female_2 = buffer.readUShort();
                        else if (opcode >= 30 && opcode < 35) {
                          if (scene_actions == null)
                            scene_actions = new String[5];
                          scene_actions[opcode - 30] = buffer.readString();
                          if (scene_actions[opcode - 30].equalsIgnoreCase("hidden"))
                            scene_actions[opcode - 30] = null;
                        } else if (opcode >= 35 && opcode < 40) {
                          if (widget_actions == null)
                            widget_actions = new String[5];
                          widget_actions[opcode - 35] = buffer.readString();
                        } else if (opcode == 40) {
                          int length = buffer.readUnsignedByte();
                          src_color = new int[length];
                          dst_color = new int[length];
                          for (int index = 0; index < length; index++) {
                            dst_color[index] = buffer.readUShort();
                            src_color[index] = buffer.readUShort();
                          }
                        } else if (opcode == 41) {
                          int length = buffer.readUnsignedByte();
                          src_texture = new short[length];
                          dst_texture = new short[length];
                          for (int index = 0; index < length; index++) {
                            src_texture[index] = (short) buffer.readUShort();
                            dst_texture[index] = (short) buffer.readUShort();
                          }
                        } else if (opcode == 42) {
                          shiftClickIndex = buffer.readUnsignedByte();
                        } else if (opcode == 65) {
                          tradeable = true;
                        } else if (opcode == 78)
                          male_equip_emblem = buffer.readUShort();
                        else if (opcode == 79)
                          female_equip_emblem = buffer.readUShort();
                        else if (opcode == 90)
                          male_dialogue_head = buffer.readUShort();
                        else if (opcode == 91)
                          female_dialogue_head = buffer.readUShort();
                        else if (opcode == 92)
                          equipped_model_male_dialogue_2 = buffer.readUShort();
                        else if (opcode == 93)
                          equipped_model_female_dialogue_2 = buffer.readUShort();
                        else if (opcode == 94)
                          category = buffer.readUShort();
                  
                        else if (opcode == 95)
                          zan2d = buffer.readUShort();
                        else if (opcode == 97)
                          unnoted_item_id = buffer.readUShort();
                        else if (opcode == 98)
                          noted_item_id = buffer.readUShort();
                        else if (opcode >= 100 && opcode < 110) {
                  
                          if (stack_variant_id == null) {
                            stack_variant_id = new int[10];
                            stack_variant_size = new int[10];
                          }
                          stack_variant_id[opcode - 100] = buffer.readUShort();
                          stack_variant_size[opcode - 100] = buffer.readUShort();
                  
                        } else if (opcode == 110)
                          resizeX = buffer.readUShort();
                        else if (opcode == 111)
                          resizeY = buffer.readUShort();
                        else if (opcode == 112)
                          resizeZ = buffer.readUShort();
                        else if (opcode == 113)
                          light_intensity = buffer.readSignedByte();
                        else if (opcode == 114)
                          light_mag = buffer.readSignedByte() * 5;
                        else if (opcode >= 100 && opcode < 110) {
                          if (stack_variant_id == null) {
                            stack_variant_id = new int[10];
                            stack_variant_size = new int[10];
                          }
                          stack_variant_id[opcode - 100] = buffer.readUShort();
                          stack_variant_size[opcode - 100] = buffer.readUShort();
                        } else if (opcode == 110)
                          resizeX = buffer.readUShort();
                        else if (opcode == 111)
                          resizeY = buffer.readUShort();
                        else if (opcode == 112)
                          resizeZ = buffer.readUShort();
                        else if (opcode == 113)
                          light_intensity = buffer.readSignedByte();
                        else if (opcode == 114)
                          light_mag = buffer.readSignedByte() * 5;
                        else if (opcode == 115)
                          team = buffer.readUnsignedByte();
                        else if (opcode == 139)
                          bought_id = buffer.readUShort();
                        else if (opcode == 140)
                          bought_template_id = buffer.readUShort();
                        else if (opcode == 148)
                          placeholder_id = buffer.readUShort();
                        else if (opcode == 149) {
                          placeholder_template_id = buffer.readUShort();
                        } else if (opcode == 249) {
                          int length = buffer.readUnsignedByte();
                  
                          params = new HashMap<>(length);
                  
                          for (int i = 0; i < length; i++) {
                            boolean isString = buffer.readUnsignedByte() == 1;
                            int key = buffer.read24Int();
                            Object value;
                  
                            if (isString) {
                              value = buffer.readString();
                            } else {
                              value = buffer.readInt();
                            }
                  
                            params.put(key, value);
                          }
                        } else {
                          System.err.printf("Error unrecognised {Items} opcode: %d%n%n", opcode);
                        }
                      }
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

                {isTabObjects && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void decode(Buffer buffer) {
                      while (true) {
                        int opcode = buffer.readUnsignedByte();
                        if (opcode == 0)
                          break;
                        if (opcode == 1) {
                          int len = buffer.readUnsignedByte();
                          if (len > 0) {
                            if (modelIds == null) {
                              modelTypes = new int[len];
                              modelIds = new int[len];
                  
                              for (int i = 0; i < len; i++) {
                                modelIds[i] = buffer.readUShort();
                                modelTypes[i] = buffer.readUnsignedByte();
                              }
                            } else {
                              buffer.currentPosition += len * 3;
                            }
                          }
                        } else if (opcode == 2)
                          name = buffer.readStrings();
                        else if (opcode == 3)
                          description = buffer.readStrings();
                        else if (opcode == 5) {
                          int len = buffer.readUnsignedByte();
                          if (len > 0) {
                            if (modelIds == null) {
                              modelTypes = null;
                              modelIds = new int[len];
                  
                              for (int i = 0; i < len; i++) {
                                modelIds[i] = buffer.readUShort();
                              }
                            } else {
                              buffer.currentPosition += len * 3;
                            }
                          }
                        } else if (opcode == 14)
                          objectSizeX = buffer.readUnsignedByte();
                        else if (opcode == 15)
                          objectSizeY = buffer.readUnsignedByte();
                        else if (opcode == 17) {
                          solid = false;
                          impenetrable = false;
                        } else if (opcode == 18)
                          impenetrable = false;
                        else if (opcode == 19)
                          isInteractive = (buffer.readUnsignedByte() == 1);
                        else if (opcode == 21)
                          contouredGround = true;
                        else if (opcode == 22)
                          delayShading = true;
                        else if (opcode == 23)
                          occludes = true;
                        else if (opcode == 24) { // Object Animations
                          animation = buffer.readUShort();
                          if (animation == 65535)
                            animation = -1;
                        } else if (opcode == 28)
                          decorDisplacement = buffer.readUnsignedByte();
                        else if (opcode == 29)
                          ambientLighting = buffer.readSignedByte();
                        else if (opcode == 39)
                          lightDiffusion = buffer.readSignedByte();
                        else if (opcode >= 30 && opcode < 35) {
                          if (interactions == null)
                            interactions = new String[10];
                          interactions[opcode - 30] = buffer.readStrings();
                          if (interactions[opcode - 30].equalsIgnoreCase("hidden"))
                            interactions[opcode - 30] = null;
                        } else if (opcode == 40) {
                          int len = buffer.readUnsignedByte();
                          modifiedModelColors = new int[len];
                          originalModelColors = new int[len];
                          for (int i = 0; i < len; i++) {
                            modifiedModelColors[i] = buffer.readUShort();
                            originalModelColors[i] = buffer.readUShort();
                          }
                        } else if (opcode == 41) {
                          int len = buffer.readUnsignedByte();
                          dst_texture = new short[len];
                          src_texture = new short[len];
                          for (int i = 0; i < len; i++) {
                            dst_texture[i] = (short) buffer.readUShort();
                            src_texture[i] = (short) buffer.readUShort();
                          }
                        } else if (opcode == 61) {
                          category = buffer.readUShort();
                        } else if (opcode == 62)
                          inverted = true;
                        else if (opcode == 64)
                          castsShadow = false;
                        else if (opcode == 65)
                          scaleX = buffer.readUShort();
                        else if (opcode == 66)
                          scaleY = buffer.readUShort();
                        else if (opcode == 67)
                          scaleZ = buffer.readUShort();
                        else if (opcode == 68)
                          mapscene = buffer.readUShort();
                        else if (opcode == 69)
                          surroundings = buffer.readUnsignedByte();
                        else if (opcode == 70)
                          translateX = buffer.readShort();
                        else if (opcode == 71)
                          translateY = buffer.readShort();
                        else if (opcode == 72)
                          translateZ = buffer.readShort();
                        else if (opcode == 73)
                          obstructsGround = true;
                        else if (opcode == 74)
                          hollow = true;
                        else if (opcode == 75)
                          supportItems = buffer.readUnsignedByte();
                        else if (opcode == 77 || opcode == 92) {
                          varbit = buffer.readUShort();
                  
                          if (varp == 0xFFFF) {
                            varp = -1;
                          }
                  
                          varp = buffer.readUShort();
                  
                          if (varbit == 0xFFFF) {
                            varbit = -1;
                          }
                  
                          int value = -1;
                  
                          if (opcode == 92) {
                            value = buffer.readUShort();
                  
                            if (value == 0xFFFF) {
                              value = -1;
                            }
                          }
                  
                          int len = buffer.readUnsignedByte();
                  
                          childrenIDs = new int[len + 2];
                          for (int i = 0; i <= len; ++i) {
                            childrenIDs[i] = buffer.readUShort();
                            if (childrenIDs[i] == 0xFFFF) {
                              childrenIDs[i] = -1;
                            }
                          }
                          childrenIDs[len + 1] = value;
                        } else if(opcode == 78) {
                          ambientSoundId = buffer.readUShort();
                          anInt2083 = buffer.readUnsignedByte();
                        } else if(opcode == 79) {
                          anInt2112 = buffer.readUShort();
                          anInt2113 = buffer.readUShort();
                          anInt2083 = buffer.readUShort();
                  
                          int length = buffer.readUnsignedByte();
                          int[] anims = new int[length];
                  
                          for (int index = 0; index < length; ++index)
                          {
                            anims[index] = buffer.readUShort();
                          }
                          ambientSoundIds = anims;
                        } else if(opcode == 81) {
                          buffer.readUnsignedByte();
                        } else if (opcode == 82) {
                          minimapFunction = buffer.readUShort();//AreaType
                        } else if(opcode == 89) {
                          randomAnimStart = false;
                        } else if (opcode == 249) {
                          int length = buffer.readUnsignedByte();
                  
                          Map<Integer, Object> params = new HashMap<>(length);
                          for (int i = 0; i < length; i++)
                          {
                            boolean isString = buffer.readUnsignedByte() == 1;
                            int key = buffer.read24Int();
                            Object value;
                  
                            if (isString) {
                              value = buffer.readString();
                              System.out.println(value);
                            } else {
                              value = buffer.readInt();
                            }
                  
                            params.put(key, value);
                          }
                  
                          this.params = params;
                        } else {
                          //System.err.printf("Error unrecognised {Objects} opcode: %d%n%n", opcode);
                        }
                      }
                      post();
                    }
                  
                    private void post()
                    {
                      if (!isInteractive)
                      {
                        isInteractive = false;
                        if (modelIds != null && (modelTypes == null || modelTypes[0] == 10))
                        {
                          isInteractive = true;
                        }
                  
                  
                        if (interactions != null) {
                          isInteractive = true;
                        }
                      }
                  
                      if (supportItems == -1) {
                        supportItems = solid ? 1 : 0;
                      }
                  
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

                {isTabVarbits && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void decode(Buffer buffer) {
                      int opcode = buffer.readUnsignedByte();
                  
                      if (opcode == 0) {
                        return;
                      } else if (opcode == 1) {
                        setting = buffer.readUShort();
                        low = buffer.readUnsignedByte();
                        high = buffer.readUnsignedByte();
                      } else {
                        System.out.println(opcode);
                      }
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

                {isTabAreas && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={` private void readValues(Buffer buffer) {
                      do {
                          int opCode = buffer.readUnsignedByte();
                          if (opCode == 0)
                              return;
                          if (opCode == 1)
                              spriteId = buffer.readInt();
                          else if (opCode == 2)
                              field3294 = buffer.readInt();
                          else if (opCode == 3)
                              name = buffer.readNewString();
                          else if (opCode == 4)
                              field3296 = buffer.readInt();
                          else if (opCode == 5)
                              field3297 = buffer.readInt();
                          else if (opCode == 6)
                              field3296 = buffer.readInt();
                          else if (opCode >= 6 && opCode < 11) {
                              if (actions  == null)
                                  actions = new String[5];
                              actions[opCode - 6] = buffer.readNewString();
                          } else if (opCode == 12)
                              field3310 = buffer.readInt();
              
                      } while (true);
                  }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

{isTabFloors && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`   
                    private void readValuesUnderlay(ByteBuffer buffer) {
                        for (;;) {
                            int opcode = buffer.get();
                            if (opcode == 0) {
                                break;
                            } else if (opcode == 1) {
                                rgb = ((buffer.get() & 0xff) << 16) + ((buffer.get() & 0xff) << 8) + (buffer.get() & 0xff);
                            } else {
                                System.out.println("Error unrecognised underlay code: " + opcode);
                            }
                        }
                    }
                    
                    private void readValuesOverlay(ByteBuffer buffer) {
                        for (;;) {
                            int opcode = buffer.get();
                            if (opcode == 0) {
                                break;
                            } else if (opcode == 1) {
                                rgb = ((buffer.get() & 0xff) << 16) + ((buffer.get() & 0xff) << 8) + (buffer.get() & 0xff);
                            } else if (opcode == 2) {
                                texture = buffer.get() & 0xff;
                            } else if (opcode == 5) {
                                occlude = false;
                            } else if (opcode == 7) {
                                anotherRgb = ((buffer.get() & 0xff) << 16) + ((buffer.get() & 0xff) << 8) + (buffer.get() & 0xff);
                            } else {
                                System.out.println("Error unrecognised overlay code: " + opcode);
                            }
                        }
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

{isTabNpc && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void decode(Buffer buffer) {
                      while (true) {
                        int opcode = buffer.readUnsignedByte();
                        if (opcode == 0)
                          return;
                        if (opcode == 1) {
                          int j = buffer.readUnsignedByte();
                          modelId = new int[j];
                          for (int j1 = 0; j1 < j; j1++) {
                            modelId[j1] = buffer.readUShort();
                          }
                        } else if (opcode == 2)
                          name = buffer.readStrings();
                        else if (opcode == 3)
                          description = buffer.readStrings();
                        else if (opcode == 12)
                          size = buffer.readSignedByte();
                        else if (opcode == 13)
                          standingAnimation = buffer.readUShort();
                        else if (opcode == 14)
                          walkingAnimation = buffer.readUShort();
                        else if(opcode == 15) {
                          rotateLeftAnimation = buffer.readUShort();
                        } else if(opcode == 16) {
                          rotateRightAnimation = buffer.readUShort();
                        } else if (opcode == 17) {
                          walkingAnimation = buffer.readUShort();
                          rotate180Animation = buffer.readUShort();
                          rotate90RightAnimation = buffer.readUShort();
                          rotate90LeftAnimation = buffer.readUShort();
                          if (rotate180Animation == 65535) {
                            rotate180Animation = -1;
                          }
                          if (rotate90RightAnimation == 65535) {
                            rotate90RightAnimation = -1;
                          }
                          if (rotate90LeftAnimation == 65535) {
                            rotate90LeftAnimation = -1;
                          }
                        } else if(opcode == 18){
                          category = buffer.readUShort();
                        } else if (opcode >= 30 && opcode < 40) {
                          if (actions == null)
                            actions = new String[10];
                          actions[opcode - 30] = buffer.readString();
                          if (actions[opcode - 30].equalsIgnoreCase("hidden"))
                            actions[opcode - 30] = null;
                        } else if (opcode == 40) {
                          int k = buffer.readUnsignedByte();
                          recolourOriginal = new int[k];
                          recolourTarget = new int[k];
                          for (int k1 = 0; k1 < k; k1++) {
                            recolourOriginal[k1] = buffer.readUShort();
                            recolourTarget[k1] = buffer.readUShort();
                          }
                        } else if (opcode == 41) {
                          int length = buffer.readUnsignedByte();
                          src_texture = new short[length];
                          dst_texture = new short[length];
                          for (int index = 0; index < length; index++) {
                            src_texture[index] = (short) buffer.readUShort();
                            dst_texture[index] = (short) buffer.readUShort();
                          }
                  
                        } else if (opcode == 60) {
                          int l = buffer.readUnsignedByte();
                          aditionalModels = new int[l];
                          for (int l1 = 0; l1 < l; l1++) {
                            aditionalModels[l1] = buffer.readUShort();
                          }
                        } else if (opcode == 93)
                          drawMinimapDot = false;
                        else if (opcode == 95)
                          combatLevel = buffer.readUShort();
                        else if (opcode == 97)
                          scaleXZ = buffer.readUShort();
                        else if (opcode == 98)
                          scaleY = buffer.readUShort();
                        else if (opcode == 99)
                          priorityRender = true;
                        else if (opcode == 100)
                          lightModifier = buffer.readSignedByte();
                        else if (opcode == 101)
                          shadowModifier = buffer.readSignedByte();
                        else if (opcode == 102)
                          headIcon = buffer.readUShort();
                        else if (opcode == 103)
                          degreesToTurn = buffer.readUShort();
                        else if (opcode == 109) {
                          rotationFlag = false;
                        } else if (opcode == 111) {
                          isPet = true;
                        }
                        else if (opcode == 106 || opcode == 118) {
                          varBitID = buffer.readUShort();
                          if (varBitID == 65535)
                            varBitID = -1;
                          settingId = buffer.readUShort();
                          if (settingId == 65535)
                            settingId = -1;
                  
                          int var3 = -1;
                          if(opcode == 118) {
                            var3 = buffer.readUShort();
                          }
                          int i1 = buffer.readUnsignedByte();
                          childrenIDs = new int[i1 + 2];
                          for (int i2 = 0; i2 <= i1; i2++) {
                            childrenIDs[i2] = buffer.readUShort();
                            if (childrenIDs[i2] == 65535)
                              childrenIDs[i2] = -1;
                          }
                          childrenIDs[i1 + 1] = var3;
                  
                        } else if (opcode == 107)
                          clickable = false;
                        else if (opcode == 249)
                        {
                          int length = buffer.readUnsignedByte();
                  
                          params = new HashMap<>(length);
                  
                          for (int i = 0; i < length; i++) {
                            boolean isString = buffer.readUnsignedByte() == 1;
                            int key = buffer.read24Int();
                            Object value;
                  
                            if (isString) {
                              value = buffer.readString();
                            }
                  
                            else {
                              value = buffer.readInt();
                            }
                  
                            params.put(key, value);
                          }
                        } else {
                          System.err.printf("Error unrecognised {NPC} opcode: %d%n%n", opcode);
                          continue;
                        }
                      }
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

{isTabSeq && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void readValues(Buffer stream) {
                      while (true) {
                        int i = stream.readUnsignedByte();
                        if (i == 0)
                          return;
                        if (i == 1) {
                          this.modelId = stream.readUShort();
                          continue;
                        }
                        if (i == 2) {
                          this.animationId = stream.readUShort();
                          if (Animation.animations != null) {
                            this.animationSequence = Animation.animations[this.animationId];
                          }
                          continue;
                        }
                        if (i == 4) {
                          this.resizeXY = stream.readUShort();
                          continue;
                        }
                        if (i == 5) {
                          this.resizeZ = stream.readUShort();
                          continue;
                        }
                        if (i == 6) {
                          this.rotation = stream.readUShort();
                          continue;
                        }
                        if (i == 7) {
                          this.modelBrightness = stream.readUnsignedByte();
                          continue;
                        }
                        if (i == 8) {
                          this.modelShadow = stream.readUnsignedByte();
                          continue;
                        }
                        if (i == 40) {
                          int j = stream.readUnsignedByte();
                          for (int k = 0; k < j; k++) {
                            this.originalModelColours[k] = stream.readUShort();
                            this.modifiedModelColours[k] = stream.readUShort();
                          }
                          continue;
                        }
                        System.out.println("Error unrecognised spotanim config code: " + i);
                      }
                    }
                  `}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

{isTabAnimations && <React.Fragment>
                  <CopyBlock
                    language="java"
                    text={`private void decode(Buffer buffer) {
                      while(true) {
                        int opcode = buffer.readUnsignedByte();
                  
                        if (opcode == 0) {
                          break;
                        } else if (opcode == 1) {
                          frameCount = buffer.readUShort();
                          primaryFrames = new int[frameCount];
                          secondaryFrames = new int[frameCount];
                          durations = new int[frameCount];
                  
                          for (int i = 0; i < frameCount; i++) {
                            durations[i] = buffer.readUShort();
                          }
                  
                          for (int i = 0; i < frameCount; i++) {
                            primaryFrames[i] = buffer.readUShort();
                            secondaryFrames[i] = -1;
                          }
                  
                          for (int i = 0; i < frameCount; i++) {
                            primaryFrames[i] += buffer.readUShort() << 16;
                          }
                  
                        } else if (opcode == 2) {
                          loopOffset = buffer.readUShort();
                        } else if (opcode == 3) {
                          int len = buffer.readUnsignedByte();
                          interleaveOrder = new int[len + 1];
                          for (int i = 0; i < len; i++) {
                            interleaveOrder[i] = buffer.readUnsignedByte();
                          }
                          interleaveOrder[len] = 9999999;
                        } else if (opcode == 4) {
                          stretches = true;
                        } else if (opcode == 5) {
                          forcedPriority = buffer.readUnsignedByte();
                        } else if (opcode == 6) {
                          playerOffhand = buffer.readUShort();
                        } else if (opcode == 7) {
                          playerMainhand = buffer.readUShort();
                        } else if (opcode == 8) {
                          maximumLoops = buffer.readUnsignedByte();
                        } else if (opcode == 9) {
                          animatingPrecedence = buffer.readUnsignedByte();
                        } else if (opcode == 10) {
                          priority = buffer.readUnsignedByte();
                        } else if (opcode == 11) {
                          replayMode = buffer.readUnsignedByte();
                        } else if (opcode == 12) {
                          int len = buffer.readUnsignedByte();
                  
                          for (int i = 0; i < len; i++) {
                            buffer.readUShort();
                          }
                  
                          for (int i = 0; i < len; i++) {
                            buffer.readUShort();
                          }
                        } else if (opcode == 13) {
                          int len = buffer.readUnsignedByte();
                  
                          for (int i = 0; i < len; i++) {
                            buffer.read24Int();
                          }
                        }
                      }
                  
                      if (frameCount == 0) {
                        frameCount = 1;
                        primaryFrames = new int[1];
                        primaryFrames[0] = -1;
                        secondaryFrames = new int[1];
                        secondaryFrames[0] = -1;
                        durations = new int[1];
                        durations[0] = -1;
                      }
                  
                      if (animatingPrecedence == -1) {
                        animatingPrecedence = (interleaveOrder == null) ? 0 : 2;
                      }
                  
                      if (priority == -1) {
                        priority = (interleaveOrder == null) ? 0 : 2;
                      }
                    }
                  
                  `}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}

{isTabModelHeader && <React.Fragment>
  <CopyBlock
                    language="java"
                    text={`private Model(int modelId) {
                      byte[] is = aClass21Array1661[modelId].aByteArray368;
                      if (is[is.length - 1] == -3 && is[is.length - 2] == -1) {
                        ModelLoader.decodeType3(this, is);
                      } else if (is[is.length - 1] == -2 && is[is.length - 2] == -1) {
                        ModelLoader.decodeType2(this, is);
                      } else if (is[is.length - 1] == -1 && is[is.length - 2] == -1) {
                        ModelLoader.decodeType1(this, is);
                      } else {
                        ModelLoader.decodeOldFormat(this, is);
                      }
                  
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>}
                  <React.Fragment><CopyBlock
                    language="java"
                    text={`package com.fluxious.entity.model;

                    import com.fluxious.io.Buffer;
                    
                    public class ModelLoader {
                    
                        public static void decodeType3(Model def, byte[] var1)
                        {
                            Buffer var2 = new Buffer(var1);
                            Buffer var3 = new Buffer(var1);
                            Buffer var4 = new Buffer(var1);
                            Buffer var5 = new Buffer(var1);
                            Buffer var6 = new Buffer(var1);
                            Buffer var7 = new Buffer(var1);
                            Buffer var8 = new Buffer(var1);
                            var2.setOffset(var1.length - 26);
                            int var9 = var2.readUnsignedShort();
                            int var10 = var2.readUnsignedShort();
                            int var11 = var2.readUnsignedByte();
                            int var12 = var2.readUnsignedByte();
                            int var13 = var2.readUnsignedByte();
                            int var14 = var2.readUnsignedByte();
                            int var15 = var2.readUnsignedByte();
                            int var16 = var2.readUnsignedByte();
                            int var17 = var2.readUnsignedByte();
                            int var18 = var2.readUnsignedByte();
                            int var19 = var2.readUnsignedShort();
                            int var20 = var2.readUnsignedShort();
                            int var21 = var2.readUnsignedShort();
                            int var22 = var2.readUnsignedShort();
                            int var23 = var2.readUnsignedShort();
                            int var24 = var2.readUnsignedShort();
                            int var25 = 0;
                            int var26 = 0;
                            int var27 = 0;
                            int var28;
                    
                    
                            if (var11 > 0)
                            {
                                def.textureTypes = new byte[var11];
                                var2.setOffset(0);
                    
                                for (var28 = 0; var28 < var11; ++var28)
                                {
                                    byte var29 = def.textureTypes[var28] = var2.readByte();
                                    if (var29 == 0)
                                    {
                                        ++var25;
                                    }
                    
                                    if (var29 >= 1 && var29 <= 3)
                                    {
                                        ++var26;
                                    }
                    
                                    if (var29 == 2)
                                    {
                                        ++var27;
                                    }
                                }
                            }
                    
                            var28 = var11 + var9;
                            int var58 = var28;
                            if (var12 == 1)
                            {
                                var28 += var10;
                            }
                    
                            int var30 = var28;
                            var28 += var10;
                            int var31 = var28;
                            if (var13 == 255)
                            {
                                var28 += var10;
                            }
                    
                            int var32 = var28;
                            if (var15 == 1)
                            {
                                var28 += var10;
                            }
                    
                            int var33 = var28;
                            var28 += var24;
                            int var34 = var28;
                            if (var14 == 1)
                            {
                                var28 += var10;
                            }
                    
                            int var35 = var28;
                            var28 += var22;
                            int var36 = var28;
                            if (var16 == 1)
                            {
                                var28 += var10 * 2;
                            }
                    
                            int var37 = var28;
                            var28 += var23;
                            int var38 = var28;
                            var28 += var10 * 2;
                            int var39 = var28;
                            var28 += var19;
                            int var40 = var28;
                            var28 += var20;
                            int var41 = var28;
                            var28 += var21;
                            int var42 = var28;
                            var28 += var25 * 6;
                            int var43 = var28;
                            var28 += var26 * 6;
                            int var44 = var28;
                            var28 += var26 * 6;
                            int var45 = var28;
                            var28 += var26 * 2;
                            int var46 = var28;
                            var28 += var26;
                            int var47 = var28;
                            var28 = var28 + var26 * 2 + var27 * 2;
                    
                            
                            def.verticesCount = var9;
                            def.trianglesCount = var10;
                            def.texturesCount = var11;
                            def.verticesX = new int[var9];
                            def.verticesY = new int[var9];
                            def.verticesZ = new int[var9];
                            def.trianglesX = new int[var10];
                            def.trianglesY = new int[var10];
                            def.trianglesZ = new int[var10];
                            if (var17 == 1)
                            {
                                def.vertexData = new int[var9];
                            }
                    
                            if (var12 == 1)
                            {
                                def.types = new int[var10];
                            }
                    
                            if (var13 == 255)
                            {
                                def.face_render_priorities = new byte[var10];
                            }
                            else
                            {
                                def.face_priority = (byte) var13;
                            }
                    
                            if (var14 == 1)
                            {
                                def.alphas = new int[var10];
                            }
                    
                            if (var15 == 1)
                            {
                                def.triangleData = new int[var10];
                            }
                    
                            if (var16 == 1)
                            {
                                def.materials = new short[var10];
                            }
                    
                            if (var16 == 1 && var11 > 0)
                            {
                                def.textures = new byte[var10];
                            }
                    
                            if (var18 == 1)
                            {
                                def.animayaGroups = new int[var9][];
                                def.animayaScales = new int[var9][];
                            }
                    
                            def.colors = new short[var10];
                            if (var11 > 0)
                            {
                                def.texturesX = new short[var11];
                                def.texturesY = new short[var11];
                                def.texturesZ = new short[var11];
                            }
                    
                            var2.setOffset(var11);
                            var3.setOffset(var39);
                            var4.setOffset(var40);
                            var5.setOffset(var41);
                            var6.setOffset(var33);
                            int var48 = 0;
                            int var49 = 0;
                            int var50 = 0;
                    
                            int var51;
                            int var52;
                            int var53;
                            int var54;
                            int var55;
                            for (var51 = 0; var51 < var9; ++var51)
                            {
                                var52 = var2.readUnsignedByte();
                                var53 = 0;
                                if ((var52 & 1) != 0)
                                {
                                    var53 = var3.readSmart();
                                }
                    
                                var54 = 0;
                                if ((var52 & 2) != 0)
                                {
                                    var54 = var4.readSmart();
                                }
                    
                                var55 = 0;
                                if ((var52 & 4) != 0)
                                {
                                    var55 = var5.readSmart();
                                }
                    
                                def.verticesX[var51] = var48 + var53;
                                def.verticesY[var51] = var49 + var54;
                                def.verticesZ[var51] = var50 + var55;
                                var48 = def.verticesX[var51];
                                var49 = def.verticesY[var51];
                                var50 = def.verticesZ[var51];
                                if (var17 == 1)
                                {
                                    def.vertexData[var51] = var6.readUnsignedByte();
                                }
                            }
                    
                            if (var18 == 1)
                            {
                                for (var51 = 0; var51 < var9; ++var51)
                                {
                                    var52 = var6.readUnsignedByte();
                                    def.animayaGroups[var51] = new int[var52];
                                    def.animayaScales[var51] = new int[var52];
                    
                                    for (var53 = 0; var53 < var52; ++var53)
                                    {
                                        def.animayaGroups[var51][var53] = var6.readUnsignedByte();
                                        def.animayaScales[var51][var53] = var6.readUnsignedByte();
                                    }
                                }
                            }
                    
                            var2.setOffset(var38);
                            var3.setOffset(var58);
                            var4.setOffset(var31);
                            var5.setOffset(var34);
                            var6.setOffset(var32);
                            var7.setOffset(var36);
                            var8.setOffset(var37);
                    
                            for (var51 = 0; var51 < var10; ++var51)
                            {
                                def.colors[var51] = (short) var2.readUnsignedShort();
                                if (var12 == 1)
                                {
                                    def.types[var51] = var3.readByte();
                                }
                    
                                if (var13 == 255)
                                {
                                    def.face_render_priorities[var51] = var4.readByte();
                                }
                    
                                if (var14 == 1)
                                {
                                    def.alphas[var51] = var5.readByte();
                                    if (def.alphas[var51] < 0) {
                                        def.alphas[var51] = (256 + def.alphas[var51]);
                                    }
                                }
                    
                                if (var15 == 1)
                                {
                                    def.triangleData[var51] = var6.readUnsignedByte();
                                }
                    
                                if (var16 == 1)
                                {
                                    def.materials[var51] = (short) (var7.readUnsignedShort() - 1);
                                }
                    
                                if (def.textures != null && def.materials[var51] != -1)
                                {
                                    def.textures[var51] = (byte) (var8.readUnsignedByte() - 1);
                                }
                            }
                    
                            var2.setOffset(var35);
                            var3.setOffset(var30);
                            var51 = 0;
                            var52 = 0;
                            var53 = 0;
                            var54 = 0;
                    
                            int var56;
                            for (var55 = 0; var55 < var10; ++var55)
                            {
                                var56 = var3.readUnsignedByte();
                                if (var56 == 1)
                                {
                                    var51 = var2.readSmart() + var54;
                                    var52 = var2.readSmart() + var51;
                                    var53 = var2.readSmart() + var52;
                                    var54 = var53;
                                    def.trianglesX[var55] = var51;
                                    def.trianglesY[var55] = var52;
                                    def.trianglesZ[var55] = var53;
                                }
                    
                                if (var56 == 2)
                                {
                                    var52 = var53;
                                    var53 = var2.readSmart() + var54;
                                    var54 = var53;
                                    def.trianglesX[var55] = var51;
                                    def.trianglesY[var55] = var52;
                                    def.trianglesZ[var55] = var53;
                                }
                    
                                if (var56 == 3)
                                {
                                    var51 = var53;
                                    var53 = var2.readSmart() + var54;
                                    var54 = var53;
                                    def.trianglesX[var55] = var51;
                                    def.trianglesY[var55] = var52;
                                    def.trianglesZ[var55] = var53;
                                }
                    
                                if (var56 == 4)
                                {
                                    int var57 = var51;
                                    var51 = var52;
                                    var52 = var57;
                                    var53 = var2.readSmart() + var54;
                                    var54 = var53;
                                    def.trianglesX[var55] = var51;
                                    def.trianglesY[var55] = var57;
                                    def.trianglesZ[var55] = var53;
                                }
                            }
                    
                            var2.setOffset(var42);
                            var3.setOffset(var43);
                            var4.setOffset(var44);
                            var5.setOffset(var45);
                            var6.setOffset(var46);
                            var7.setOffset(var47);
                    
                            for (var55 = 0; var55 < var11; ++var55)
                            {
                                var56 = def.textureTypes[var55] & 255;
                                if (var56 == 0)
                                {
                                    def.texturesX[var55] = (short) var2.readUnsignedShort();
                                    def.texturesY[var55] = (short) var2.readUnsignedShort();
                                    def.texturesZ[var55] = (short) var2.readUnsignedShort();
                                }
                            }
                    
                            var2.setOffset(var28);
                            var55 = var2.readUnsignedByte();
                            if (var55 != 0)
                            {
                                var2.readUnsignedShort();
                                var2.readUnsignedShort();
                                var2.readUnsignedShort();
                                var2.readInt();
                            }
                    
                        }
                    
                        public static void decodeType2(Model def, byte[] var1)
                        {
                            boolean var2 = false;
                            boolean var3 = false;
                            Buffer var4 = new Buffer(var1);
                            Buffer var5 = new Buffer(var1);
                            Buffer var6 = new Buffer(var1);
                            Buffer var7 = new Buffer(var1);
                            Buffer var8 = new Buffer(var1);
                            var4.setOffset(var1.length - 23);
                            int var9 = var4.readUnsignedShort();
                            int var10 = var4.readUnsignedShort();
                            int var11 = var4.readUnsignedByte();
                            int var12 = var4.readUnsignedByte();
                            int var13 = var4.readUnsignedByte();
                            int var14 = var4.readUnsignedByte();
                            int var15 = var4.readUnsignedByte();
                            int var16 = var4.readUnsignedByte();
                            int var17 = var4.readUnsignedByte();
                            int var18 = var4.readUnsignedShort();
                            int var19 = var4.readUnsignedShort();
                            int var20 = var4.readUnsignedShort();
                            int var21 = var4.readUnsignedShort();
                            int var22 = var4.readUnsignedShort();
                            byte var23 = 0;
                            int var24 = var23 + var9;
                            int var25 = var24;
                            var24 += var10;
                            int var26 = var24;
                            if (var13 == 255)
                            {
                                var24 += var10;
                            }
                    
                            int var27 = var24;
                            if (var15 == 1)
                            {
                                var24 += var10;
                            }
                    
                            int var28 = var24;
                            if (var12 == 1)
                            {
                                var24 += var10;
                            }
                    
                            int var29 = var24;
                            var24 += var22;
                            int var30 = var24;
                            if (var14 == 1)
                            {
                                var24 += var10;
                            }
                    
                            int var31 = var24;
                            var24 += var21;
                            int var32 = var24;
                            var24 += var10 * 2;
                            int var33 = var24;
                            var24 += var11 * 6;
                            int var34 = var24;
                            var24 += var18;
                            int var35 = var24;
                            var24 += var19;
                            int var10000 = var24 + var20;
                            def.verticesCount = var9;
                            def.trianglesCount = var10;
                            def.texturesCount = var11;
                            def.verticesX = new int[var9];
                            def.verticesY = new int[var9];
                            def.verticesZ = new int[var9];
                            def.trianglesX = new int[var10];
                            def.trianglesY = new int[var10];
                            def.trianglesZ = new int[var10];
                            if (var11 > 0)
                            {
                                def.textureTypes = new byte[var11];
                                def.texturesX = new short[var11];
                                def.texturesY = new short[var11];
                                def.texturesZ = new short[var11];
                            }
                    
                            if (var16 == 1)
                            {
                                def.vertexData = new int[var9];
                            }
                    
                            if (var12 == 1)
                            {
                                def.types = new int[var10];
                                def.textures = new byte[var10];
                                def.materials = new short[var10];
                            }
                    
                            if (var13 == 255)
                            {
                                def.face_render_priorities = new byte[var10];
                            }
                            else
                            {
                                def.face_priority = (byte) var13;
                            }
                    
                            if (var14 == 1)
                            {
                                def.alphas = new int[var10];
                            }
                    
                            if (var15 == 1)
                            {
                                def.triangleData = new int[var10];
                            }
                    
                            if (var17 == 1)
                            {
                                def.animayaGroups = new int[var9][];
                                def.animayaScales = new int[var9][];
                            }
                    
                            def.colors = new short[var10];
                            var4.setOffset(var23);
                            var5.setOffset(var34);
                            var6.setOffset(var35);
                            var7.setOffset(var24);
                            var8.setOffset(var29);
                            int var37 = 0;
                            int var38 = 0;
                            int var39 = 0;
                    
                            int var40;
                            int var41;
                            int var42;
                            int var43;
                            int var44;
                            for (var40 = 0; var40 < var9; ++var40)
                            {
                                var41 = var4.readUnsignedByte();
                                var42 = 0;
                                if ((var41 & 1) != 0)
                                {
                                    var42 = var5.readSmart();
                                }
                    
                                var43 = 0;
                                if ((var41 & 2) != 0)
                                {
                                    var43 = var6.readSmart();
                                }
                    
                                var44 = 0;
                                if ((var41 & 4) != 0)
                                {
                                    var44 = var7.readSmart();
                                }
                    
                                def.verticesX[var40] = var37 + var42;
                                def.verticesY[var40] = var38 + var43;
                                def.verticesZ[var40] = var39 + var44;
                                var37 = def.verticesX[var40];
                                var38 = def.verticesY[var40];
                                var39 = def.verticesZ[var40];
                                if (var16 == 1)
                                {
                                    def.vertexData[var40] = var8.readUnsignedByte();
                                }
                            }
                    
                            if (var17 == 1)
                            {
                                for (var40 = 0; var40 < var9; ++var40)
                                {
                                    var41 = var8.readUnsignedByte();
                                    def.animayaGroups[var40] = new int[var41];
                                    def.animayaScales[var40] = new int[var41];
                    
                                    for (var42 = 0; var42 < var41; ++var42)
                                    {
                                        def.animayaGroups[var40][var42] = var8.readUnsignedByte();
                                        def.animayaScales[var40][var42] = var8.readUnsignedByte();
                                    }
                                }
                            }
                    
                            var4.setOffset(var32);
                            var5.setOffset(var28);
                            var6.setOffset(var26);
                            var7.setOffset(var30);
                            var8.setOffset(var27);
                    
                            for (var40 = 0; var40 < var10; ++var40)
                            {
                                def.colors[var40] = (short) var4.readUnsignedShort();
                                if (var12 == 1)
                                {
                                    var41 = var5.readUnsignedByte();
                                    if ((var41 & 1) == 1)
                                    {
                                        def.types[var40] = 1;
                                        var2 = true;
                                    }
                                    else
                                    {
                                        def.types[var40] = 0;
                                    }
                    
                                    if ((var41 & 2) == 2)
                                    {
                                        def.textures[var40] = (byte) (var41 >> 2);
                                        def.materials[var40] = def.colors[var40];
                                        def.colors[var40] = 127;
                                        if (def.materials[var40] != -1)
                                        {
                                            var3 = true;
                                        }
                                    }
                                    else
                                    {
                                        def.textures[var40] = -1;
                                        def.materials[var40] = -1;
                                    }
                                }
                    
                                if (var13 == 255)
                                {
                                    def.face_render_priorities[var40] = var6.readByte();
                                }
                    
                                if (var14 == 1)
                                {
                                    def.alphas[var40] = var7.readByte();
                                    if (def.alphas[var40] < 0) {
                                        def.alphas[var40] = (256 + def.alphas[var40]);
                                    }
                                }
                    
                                if (var15 == 1)
                                {
                                    def.triangleData[var40] = var8.readUnsignedByte();
                                }
                            }
                    
                            var4.setOffset(var31);
                            var5.setOffset(var25);
                            var40 = 0;
                            var41 = 0;
                            var42 = 0;
                            var43 = 0;
                    
                            int var45;
                            int var46;
                            for (var44 = 0; var44 < var10; ++var44)
                            {
                                var45 = var5.readUnsignedByte();
                                if (var45 == 1)
                                {
                                    var40 = var4.readSmart() + var43;
                                    var41 = var4.readSmart() + var40;
                                    var42 = var4.readSmart() + var41;
                                    var43 = var42;
                                    def.trianglesX[var44] = var40;
                                    def.trianglesY[var44] = var41;
                                    def.trianglesZ[var44] = var42;
                                }
                    
                                if (var45 == 2)
                                {
                                    var41 = var42;
                                    var42 = var4.readSmart() + var43;
                                    var43 = var42;
                                    def.trianglesX[var44] = var40;
                                    def.trianglesY[var44] = var41;
                                    def.trianglesZ[var44] = var42;
                                }
                    
                                if (var45 == 3)
                                {
                                    var40 = var42;
                                    var42 = var4.readSmart() + var43;
                                    var43 = var42;
                                    def.trianglesX[var44] = var40;
                                    def.trianglesY[var44] = var41;
                                    def.trianglesZ[var44] = var42;
                                }
                    
                                if (var45 == 4)
                                {
                                    var46 = var40;
                                    var40 = var41;
                                    var41 = var46;
                                    var42 = var4.readSmart() + var43;
                                    var43 = var42;
                                    def.trianglesX[var44] = var40;
                                    def.trianglesY[var44] = var46;
                                    def.trianglesZ[var44] = var42;
                                }
                            }
                    
                            var4.setOffset(var33);
                    
                            for (var44 = 0; var44 < var11; ++var44)
                            {
                                def.textureTypes[var44] = 0;
                                def.texturesX[var44] = (short) var4.readUnsignedShort();
                                def.texturesY[var44] = (short) var4.readUnsignedShort();
                                def.texturesZ[var44] = (short) var4.readUnsignedShort();
                            }
                    
                            if (def.textures != null)
                            {
                                boolean var47 = false;
                    
                                for (var45 = 0; var45 < var10; ++var45)
                                {
                                    var46 = def.textures[var45] & 255;
                                    if (var46 != 255)
                                    {
                                        if (def.trianglesX[var45] == (def.texturesX[var46] & '\uffff') && def.trianglesY[var45] == (def.texturesY[var46] & '\uffff') && def.trianglesZ[var45] == (def.texturesZ[var46] & '\uffff'))
                                        {
                                            def.textures[var45] = -1;
                                        }
                                        else
                                        {
                                            var47 = true;
                                        }
                                    }
                                }
                    
                                if (!var47)
                                {
                                    def.textures = null;
                                }
                            }
                    
                            if (!var3)
                            {
                                def.materials = null;
                            }
                    
                            if (!var2)
                            {
                                def.types = null;
                            }
                    
                        }
                    
                        public static void decodeType1(Model def, byte[] var1)
                        {
                            Buffer var2 = new Buffer(var1);
                            Buffer var3 = new Buffer(var1);
                            Buffer var4 = new Buffer(var1);
                            Buffer var5 = new Buffer(var1);
                            Buffer var6 = new Buffer(var1);
                            Buffer var7 = new Buffer(var1);
                            Buffer var8 = new Buffer(var1);
                            var2.setOffset(var1.length - 23);
                            int var9 = var2.readUnsignedShort();
                            int var10 = var2.readUnsignedShort();
                            int var11 = var2.readUnsignedByte();
                            int var12 = var2.readUnsignedByte();
                            int var13 = var2.readUnsignedByte();
                            int var14 = var2.readUnsignedByte();
                            int var15 = var2.readUnsignedByte();
                            int var16 = var2.readUnsignedByte();
                            int var17 = var2.readUnsignedByte();
                            int var18 = var2.readUnsignedShort();
                            int var19 = var2.readUnsignedShort();
                            int var20 = var2.readUnsignedShort();
                            int var21 = var2.readUnsignedShort();
                            int var22 = var2.readUnsignedShort();
                            int var23 = 0;
                            int var24 = 0;
                            int var25 = 0;
                            int var26;
                            if (var11 > 0)
                            {
                                def.textureTypes = new byte[var11];
                                var2.setOffset(0);
                    
                                for (var26 = 0; var26 < var11; ++var26)
                                {
                                    byte var27 = def.textureTypes[var26] = var2.readByte();
                                    if (var27 == 0)
                                    {
                                        ++var23;
                                    }
                    
                                    if (var27 >= 1 && var27 <= 3)
                                    {
                                        ++var24;
                                    }
                    
                                    if (var27 == 2)
                                    {
                                        ++var25;
                                    }
                                }
                            }
                    
                            var26 = var11 + var9;
                            int var56 = var26;
                            if (var12 == 1)
                            {
                                var26 += var10;
                            }
                    
                            int var28 = var26;
                            var26 += var10;
                            int var29 = var26;
                            if (var13 == 255)
                            {
                                var26 += var10;
                            }
                    
                            int var30 = var26;
                            if (var15 == 1)
                            {
                                var26 += var10;
                            }
                    
                            int var31 = var26;
                            if (var17 == 1)
                            {
                                var26 += var9;
                            }
                    
                            int var32 = var26;
                            if (var14 == 1)
                            {
                                var26 += var10;
                            }
                    
                            int var33 = var26;
                            var26 += var21;
                            int var34 = var26;
                            if (var16 == 1)
                            {
                                var26 += var10 * 2;
                            }
                    
                            int var35 = var26;
                            var26 += var22;
                            int var36 = var26;
                            var26 += var10 * 2;
                            int var37 = var26;
                            var26 += var18;
                            int var38 = var26;
                            var26 += var19;
                            int var39 = var26;
                            var26 += var20;
                            int var40 = var26;
                            var26 += var23 * 6;
                            int var41 = var26;
                            var26 += var24 * 6;
                            int var42 = var26;
                            var26 += var24 * 6;
                            int var43 = var26;
                            var26 += var24 * 2;
                            int var44 = var26;
                            var26 += var24;
                            int var45 = var26;
                            var26 = var26 + var24 * 2 + var25 * 2;
                            def.verticesCount = var9;
                            def.trianglesCount = var10;
                            def.texturesCount = var11;
                            def.verticesX = new int[var9];
                            def.verticesY = new int[var9];
                            def.verticesZ = new int[var9];
                            def.trianglesX = new int[var10];
                            def.trianglesY = new int[var10];
                            def.trianglesZ = new int[var10];
                            if (var17 == 1)
                            {
                                def.vertexData = new int[var9];
                            }
                    
                            if (var12 == 1)
                            {
                                def.types = new int[var10];
                            }
                    
                            if (var13 == 255)
                            {
                                def.face_render_priorities = new byte[var10];
                            }
                            else
                            {
                                def.face_priority = (byte) var13;
                            }
                    
                            if (var14 == 1)
                            {
                                def.alphas = new int[var10];
                            }
                    
                            if (var15 == 1)
                            {
                                def.triangleData = new int[var10];
                            }
                    
                            if (var16 == 1)
                            {
                                def.materials = new short[var10];
                            }
                    
                            if (var16 == 1 && var11 > 0)
                            {
                                def.textures = new byte[var10];
                            }
                    
                            def.colors = new short[var10];
                            if (var11 > 0)
                            {
                                def.texturesX = new short[var11];
                                def.texturesY = new short[var11];
                                def.texturesZ = new short[var11];
                            }
                    
                            var2.setOffset(var11);
                            var3.setOffset(var37);
                            var4.setOffset(var38);
                            var5.setOffset(var39);
                            var6.setOffset(var31);
                            int var46 = 0;
                            int var47 = 0;
                            int var48 = 0;
                    
                            int var49;
                            int var50;
                            int var51;
                            int var52;
                            int var53;
                            for (var49 = 0; var49 < var9; ++var49)
                            {
                                var50 = var2.readUnsignedByte();
                                var51 = 0;
                                if ((var50 & 1) != 0)
                                {
                                    var51 = var3.readSmart();
                                }
                    
                                var52 = 0;
                                if ((var50 & 2) != 0)
                                {
                                    var52 = var4.readSmart();
                                }
                    
                                var53 = 0;
                                if ((var50 & 4) != 0)
                                {
                                    var53 = var5.readSmart();
                                }
                    
                                def.verticesX[var49] = var46 + var51;
                                def.verticesY[var49] = var47 + var52;
                                def.verticesZ[var49] = var48 + var53;
                                var46 = def.verticesX[var49];
                                var47 = def.verticesY[var49];
                                var48 = def.verticesZ[var49];
                                if (var17 == 1)
                                {
                                    def.vertexData[var49] = var6.readUnsignedByte();
                                }
                            }
                    
                            var2.setOffset(var36);
                            var3.setOffset(var56);
                            var4.setOffset(var29);
                            var5.setOffset(var32);
                            var6.setOffset(var30);
                            var7.setOffset(var34);
                            var8.setOffset(var35);
                    
                            for (var49 = 0; var49 < var10; ++var49)
                            {
                                def.colors[var49] = (short) var2.readUnsignedShort();
                                if (var12 == 1)
                                {
                                    def.types[var49] = var3.readByte();
                                }
                    
                                if (var13 == 255)
                                {
                                    def.face_render_priorities[var49] = var4.readByte();
                                }
                    
                                if (var14 == 1)
                                {
                                    def.alphas[var49] = var5.readByte();
                                    if (def.alphas[var49] < 0) {
                                        def.alphas[var49] = (256 + def.alphas[var40]);
                                    }
                                }
                    
                                if (var15 == 1)
                                {
                                    def.triangleData[var49] = var6.readUnsignedByte();
                                }
                    
                                if (var16 == 1)
                                {
                                    def.materials[var49] = (short) (var7.readUnsignedShort() - 1);
                                }
                    
                                if (def.textures != null && def.materials[var49] != -1)
                                {
                                    def.textures[var49] = (byte) (var8.readUnsignedByte() - 1);
                                }
                            }
                    
                            var2.setOffset(var33);
                            var3.setOffset(var28);
                            var49 = 0;
                            var50 = 0;
                            var51 = 0;
                            var52 = 0;
                    
                            int var54;
                            for (var53 = 0; var53 < var10; ++var53)
                            {
                                var54 = var3.readUnsignedByte();
                                if (var54 == 1)
                                {
                                    var49 = var2.readSmart() + var52;
                                    var50 = var2.readSmart() + var49;
                                    var51 = var2.readSmart() + var50;
                                    var52 = var51;
                                    def.trianglesX[var53] = var49;
                                    def.trianglesY[var53] = var50;
                                    def.trianglesZ[var53] = var51;
                                }
                    
                                if (var54 == 2)
                                {
                                    var50 = var51;
                                    var51 = var2.readSmart() + var52;
                                    var52 = var51;
                                    def.trianglesX[var53] = var49;
                                    def.trianglesY[var53] = var50;
                                    def.trianglesZ[var53] = var51;
                                }
                    
                                if (var54 == 3)
                                {
                                    var49 = var51;
                                    var51 = var2.readSmart() + var52;
                                    var52 = var51;
                                    def.trianglesX[var53] = var49;
                                    def.trianglesY[var53] = var50;
                                    def.trianglesZ[var53] = var51;
                                }
                    
                                if (var54 == 4)
                                {
                                    int var55 = var49;
                                    var49 = var50;
                                    var50 = var55;
                                    var51 = var2.readSmart() + var52;
                                    var52 = var51;
                                    def.trianglesX[var53] = var49;
                                    def.trianglesY[var53] = var55;
                                    def.trianglesZ[var53] = var51;
                                }
                            }
                    
                            var2.setOffset(var40);
                            var3.setOffset(var41);
                            var4.setOffset(var42);
                            var5.setOffset(var43);
                            var6.setOffset(var44);
                            var7.setOffset(var45);
                    
                            for (var53 = 0; var53 < var11; ++var53)
                            {
                                var54 = def.textureTypes[var53] & 255;
                                if (var54 == 0)
                                {
                                    def.texturesX[var53] = (short) var2.readUnsignedShort();
                                    def.texturesY[var53] = (short) var2.readUnsignedShort();
                                    def.texturesZ[var53] = (short) var2.readUnsignedShort();
                                }
                            }
                    
                            var2.setOffset(var26);
                            var53 = var2.readUnsignedByte();
                            if (var53 != 0)
                            {
                                var2.readUnsignedShort();
                                var2.readUnsignedShort();
                                var2.readUnsignedShort();
                                var2.readInt();
                            }
                    
                        }
                    
                        public static void decodeOldFormat(Model def, byte[] var1)
                        {
                            boolean var2 = false;
                            boolean var3 = false;
                            Buffer var4 = new Buffer(var1);
                            Buffer var5 = new Buffer(var1);
                            Buffer var6 = new Buffer(var1);
                            Buffer var7 = new Buffer(var1);
                            Buffer var8 = new Buffer(var1);
                            var4.setOffset(var1.length - 18);
                            int var9 = var4.readUnsignedShort();
                            int var10 = var4.readUnsignedShort();
                            int var11 = var4.readUnsignedByte();
                            int var12 = var4.readUnsignedByte();
                            int var13 = var4.readUnsignedByte();
                            int var14 = var4.readUnsignedByte();
                            int var15 = var4.readUnsignedByte();
                            int var16 = var4.readUnsignedByte();
                            int var17 = var4.readUnsignedShort();
                            int var18 = var4.readUnsignedShort();
                            int var19 = var4.readUnsignedShort();
                            int var20 = var4.readUnsignedShort();
                            byte var21 = 0;
                            int var22 = var21 + var9;
                            int var23 = var22;
                            var22 += var10;
                            int var24 = var22;
                            if (var13 == 255)
                            {
                                var22 += var10;
                            }
                    
                            int var25 = var22;
                            if (var15 == 1)
                            {
                                var22 += var10;
                            }
                    
                            int var26 = var22;
                            if (var12 == 1)
                            {
                                var22 += var10;
                            }
                    
                            int var27 = var22;
                            if (var16 == 1)
                            {
                                var22 += var9;
                            }
                    
                            int var28 = var22;
                            if (var14 == 1)
                            {
                                var22 += var10;
                            }
                    
                            int var29 = var22;
                            var22 += var20;
                            int var30 = var22;
                            var22 += var10 * 2;
                            int var31 = var22;
                            var22 += var11 * 6;
                            int var32 = var22;
                            var22 += var17;
                            int var33 = var22;
                            var22 += var18;
                            int var10000 = var22 + var19;
                            def.verticesCount = var9;
                            def.trianglesCount = var10;
                            def.texturesCount = var11;
                            def.verticesX = new int[var9];
                            def.verticesY = new int[var9];
                            def.verticesZ = new int[var9];
                            def.trianglesX = new int[var10];
                            def.trianglesY = new int[var10];
                            def.trianglesZ = new int[var10];
                            if (var11 > 0)
                            {
                                def.textureTypes = new byte[var11];
                                def.texturesX = new short[var11];
                                def.texturesY = new short[var11];
                                def.texturesZ = new short[var11];
                            }
                    
                            if (var16 == 1)
                            {
                                def.vertexData = new int[var9];
                            }
                    
                            if (var12 == 1)
                            {
                                def.types = new int[var10];
                                def.textures = new byte[var10];
                                def.materials = new short[var10];
                            }
                    
                            if (var13 == 255)
                            {
                                def.face_render_priorities = new byte[var10];
                            }
                            else
                            {
                                def.face_priority = (byte) var13;
                            }
                    
                            if (var14 == 1)
                            {
                                def.alphas = new int[var10];
                            }
                    
                            if (var15 == 1)
                            {
                                def.triangleData = new int[var10];
                            }
                    
                            def.colors = new short[var10];
                            var4.setOffset(var21);
                            var5.setOffset(var32);
                            var6.setOffset(var33);
                            var7.setOffset(var22);
                            var8.setOffset(var27);
                            int var35 = 0;
                            int var36 = 0;
                            int var37 = 0;
                    
                            int var38;
                            int var39;
                            int var40;
                            int var41;
                            int var42;
                            for (var38 = 0; var38 < var9; ++var38)
                            {
                                var39 = var4.readUnsignedByte();
                                var40 = 0;
                                if ((var39 & 1) != 0)
                                {
                                    var40 = var5.readSmart();
                                }
                    
                                var41 = 0;
                                if ((var39 & 2) != 0)
                                {
                                    var41 = var6.readSmart();
                                }
                    
                                var42 = 0;
                                if ((var39 & 4) != 0)
                                {
                                    var42 = var7.readSmart();
                                }
                    
                                def.verticesX[var38] = var35 + var40;
                                def.verticesY[var38] = var36 + var41;
                                def.verticesZ[var38] = var37 + var42;
                                var35 = def.verticesX[var38];
                                var36 = def.verticesY[var38];
                                var37 = def.verticesZ[var38];
                                if (var16 == 1)
                                {
                                    def.vertexData[var38] = var8.readUnsignedByte();
                                }
                            }
                    
                            var4.setOffset(var30);
                            var5.setOffset(var26);
                            var6.setOffset(var24);
                            var7.setOffset(var28);
                            var8.setOffset(var25);
                    
                            for (var38 = 0; var38 < var10; ++var38)
                            {
                                def.colors[var38] = (short) var4.readUnsignedShort();
                                if (var12 == 1)
                                {
                                    var39 = var5.readUnsignedByte();
                                    if ((var39 & 1) == 1)
                                    {
                                        def.types[var38] = 1;
                                        var2 = true;
                                    }
                                    else
                                    {
                                        def.types[var38] = 0;
                                    }
                    
                                    if ((var39 & 2) == 2)
                                    {
                                        def.textures[var38] = (byte) (var39 >> 2);
                                        def.materials[var38] = def.colors[var38];
                                        def.colors[var38] = 127;
                                        if (def.materials[var38] != -1)
                                        {
                                            var3 = true;
                                        }
                                    }
                                    else
                                    {
                                        def.textures[var38] = -1;
                                        def.materials[var38] = -1;
                                    }
                                }
                    
                                if (var13 == 255)
                                {
                                    def.face_render_priorities[var38] = var6.readByte();
                                }
                    
                                if (var14 == 1)
                                {
                                    def.alphas[var38] = var7.readByte();
                                    if (def.alphas[var38] < 0) {
                                        def.alphas[var38] = (256 + def.alphas[var38]);
                                    }
                                }
                    
                                if (var15 == 1)
                                {
                                    def.triangleData[var38] = var8.readUnsignedByte();
                                }
                            }
                    
                            var4.setOffset(var29);
                            var5.setOffset(var23);
                            var38 = 0;
                            var39 = 0;
                            var40 = 0;
                            var41 = 0;
                    
                            int var43;
                            int var44;
                            for (var42 = 0; var42 < var10; ++var42)
                            {
                                var43 = var5.readUnsignedByte();
                                if (var43 == 1)
                                {
                                    var38 = var4.readSmart() + var41;
                                    var39 = var4.readSmart() + var38;
                                    var40 = var4.readSmart() + var39;
                                    var41 = var40;
                                    def.trianglesX[var42] = var38;
                                    def.trianglesY[var42] = var39;
                                    def.trianglesZ[var42] = var40;
                                }
                    
                                if (var43 == 2)
                                {
                                    var39 = var40;
                                    var40 = var4.readSmart() + var41;
                                    var41 = var40;
                                    def.trianglesX[var42] = var38;
                                    def.trianglesY[var42] = var39;
                                    def.trianglesZ[var42] = var40;
                                }
                    
                                if (var43 == 3)
                                {
                                    var38 = var40;
                                    var40 = var4.readSmart() + var41;
                                    var41 = var40;
                                    def.trianglesX[var42] = var38;
                                    def.trianglesY[var42] = var39;
                                    def.trianglesZ[var42] = var40;
                                }
                    
                                if (var43 == 4)
                                {
                                    var44 = var38;
                                    var38 = var39;
                                    var39 = var44;
                                    var40 = var4.readSmart() + var41;
                                    var41 = var40;
                                    def.trianglesX[var42] = var38;
                                    def.trianglesY[var42] = var44;
                                    def.trianglesZ[var42] = var40;
                                }
                            }
                    
                            var4.setOffset(var31);
                    
                            for (var42 = 0; var42 < var11; ++var42)
                            {
                                def.textureTypes[var42] = 0;
                                def.texturesX[var42] = (short) var4.readUnsignedShort();
                                def.texturesY[var42] = (short) var4.readUnsignedShort();
                                def.texturesZ[var42] = (short) var4.readUnsignedShort();
                            }
                    
                            if (def.textures != null)
                            {
                                boolean var45 = false;
                    
                                for (var43 = 0; var43 < var10; ++var43)
                                {
                                    var44 = def.textures[var43] & 255;
                                    if (var44 != 255)
                                    {
                                        if (def.trianglesX[var43] == (def.texturesX[var44] & '\uffff') && def.trianglesY[var43] == (def.texturesY[var44] & '\uffff') && def.trianglesZ[var43] == (def.texturesZ[var44] & '\uffff'))
                                        {
                                            def.textures[var43] = -1;
                                        }
                                        else
                                        {
                                            var45 = true;
                                        }
                                    }
                                }
                    
                                if (!var45)
                                {
                                    def.textures = null;
                                }
                            }
                    
                            if (!var3)
                            {
                                def.materials = null;
                            }
                    
                            if (!var2)
                            {
                                def.types = null;
                            }
                    
                        }
                    }`}
                    codeBlock
                    wrapLines={true}
                    theme={dracula}
                    showLineNumbers={false}
                  /> </React.Fragment>

              </TabBody>
            </TabContainer>

            
            </div>
          </div>
        </div>
      </>

      )
}

export default withRouter(_317)
