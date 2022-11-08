import videoCam from "../../assets/videoCam.svg"
import phoneCall from "../../assets/phoneCall.svg"
import moreOptions from "../../assets/moreOptions.svg"
import { HeaderContainer, SelectUsers, HeaderIcons, ProfilePhoto, Icons, Select } from "./Header.styled";


function Header(props) {
    const { senders, currSender, onChangeSender } = props
    return (
        <HeaderContainer >
            <SelectUsers>
                <ProfilePhoto src={`https://picsum.photos/seed/${currSender}/50`} alt="Profile photo" />
                <div>
                    <Select value={currSender} onChange={onChangeSender}>
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>{sender}
                            </option>
                        ))}
                    </Select>
                    <p>Online</p>
                </div>
            </SelectUsers>
            <HeaderIcons>
                <Icons>
                    <img src={videoCam} alt="Video cam icon" />
                </Icons>
                <Icons>
                    <img src={phoneCall} alt="Phone call icon" />
                </Icons>
                <Icons>
                    <img src={moreOptions} alt="More options icon" />
                </Icons>
            </HeaderIcons>

        </HeaderContainer>
    );
}

export default Header;