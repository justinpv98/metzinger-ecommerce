import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as styled from "./Footer.styles";
import { Input } from "../FormElements/FormElements";
import Icon from "../Icon/Icon";

function Footer() {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setValue("");
  }

  return (
    <styled.Footer>
      <styled.SectionsContainer>
        <styled.Section>
          <styled.SectionTitle>Subscribe to Our Newsletter</styled.SectionTitle>
          <styled.SectionCopy>
            Enter your email to sign up for our newsletter concerning new
            Metzinger events and collections.
          </styled.SectionCopy>
          <styled.FormItem onSubmit={onSubmit}>
            <Input
              type="email"
              placeholder="email address..."
              label="email address"
              onChange={onChange}
              value={value}
            />
            <styled.InputButton>
              <Icon icon="arrowRight" size="20" />
            </styled.InputButton>
          </styled.FormItem>
        </styled.Section>
        <styled.Section>
          <styled.SectionTitle>Customer Service</styled.SectionTitle>
          <styled.List>
            <styled.ListItem>
              <Link to="#">My Account</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">FAQ</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">Returns</Link>
            </styled.ListItem>
          </styled.List>
        </styled.Section>
        <styled.Section>
          <styled.SectionTitle>About Us</styled.SectionTitle>
          <styled.List>
            <styled.ListItem>
              <Link to="#">Press Lounge</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">Terms and Conditions</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">Privacy</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">Accessibility</Link>
            </styled.ListItem>
            <styled.ListItem>
              <Link to="#">Brand Protection</Link>
            </styled.ListItem>
          </styled.List>
        </styled.Section>
        <styled.Section>
          <div>
            <styled.SectionTitle>Find A Store</styled.SectionTitle>
            <styled.List>
              <styled.ListItem>
                <Link to="#">
                  <Icon icon="mapPin" size={14} /> Store Locator
                </Link>
              </styled.ListItem>
            </styled.List>
          </div>
          <styled.SocialsSection>
            <styled.SectionTitle>Follow Us On</styled.SectionTitle>
            <styled.List>
              <styled.SocialsItem>
                <styled.Social
                  href="https://github.com/justinpv98"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <Icon icon="github" size={20} />
                </styled.Social>
              </styled.SocialsItem>
              <styled.SocialsItem>
                <styled.Social
                  href="https://github.com/justinpv98"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <Icon icon="facebook" size={20} />
                </styled.Social>
              </styled.SocialsItem>
              <styled.SocialsItem>
                <styled.Social
                  href="https://github.com/justinpv98"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <Icon icon="twitter" size={20} />
                </styled.Social>
              </styled.SocialsItem>
              <styled.SocialsItem>
                <styled.Social
                  href="https://github.com/justinpv98"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <Icon icon="instagram" size={20} />
                </styled.Social>
              </styled.SocialsItem>
            </styled.List>
          </styled.SocialsSection>
        </styled.Section>
      </styled.SectionsContainer>
      <styled.Attribution>
        <styled.SectionCopy>
          &copy; 2022 Metzinger. &nbsp;
          <styled.AttributionLink
            href="https://github.com/justinpv98"
            target="_blank"
            rel="noreferrer"
          >
            Made by Justin V.
          </styled.AttributionLink>
        </styled.SectionCopy>
      </styled.Attribution>
    </styled.Footer>
  );
}

export default Footer;
